import Layout from '~/components/Layout'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { ReactElement, useState } from 'react'
import { api } from '~/utils/api'
import {  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Spinner,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import Link from 'next/link'

export default function Tournament() {

  const router = useRouter()
  const tournamentId = parseInt(router.query.id as string, 10)

  const {mutate} = api.team.addTeamToTournament.useMutation()
  const {data: myTeam} = api.team.getMyTeam.useQuery()
  const {data, isLoading} = api.tournament.getTournamentById.useQuery(tournamentId)

  function joinTournament(teamId: number){
    mutate({teamId: teamId, tournamentId: tournamentId})
  }

  function JoinTournament() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [loading, setLoading] = useState(false)
    return (
      <>
        <Button onClick={onOpen}>Ikut Turnamen</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Pilih Tim</ModalHeader>
            <ModalCloseButton />
            <ModalBody className='flex gap-3 flex-wrap'>
              {myTeam?.map(team=>(
                <div onClick={()=>joinTournament(team?.id)} key={team?.id} className='rounded p-3 bg-slate-400 cursor-pointer'>{team?.name}</div>
              ))}
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }

  if(isLoading) return <Spinner/>

  if(!data) return <h1>There is no data</h1>

  return (
    <>
      <Head>
        <title>Turnamen</title>
      </Head>
     <div>
      <h1 className='font-bold text-xl'>{data?.name}</h1>
      <div className='mt-3'>
        <h1 className="font-bold">Tim yg bermain</h1>
        <JoinTournament/>
        <TableContainer>
          <Table variant='simple'>
            <TableCaption placement='top'>Grup A</TableCaption>
            <Thead>
              <Tr>
                <Th>No</Th>
                <Th>Nama</Th>
                <Th>W</Th>
                <Th>D</Th>
                <Th>L</Th>
                <Th>Point</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data?.teams.length < 1 && <div className='p-3'>Tidak ada data tim</div>}
              {data?.teams?.map((team, index)=>(
                <Tr key={team?.id}>
                  <Td>{index + 1}</Td>
                  <Td>
                    <Link href={`/team/${team?.id}`}>
                      {team?.name}
                    </Link>
                  </Td>
                  <Td>-</Td>
                  <Td>-</Td>
                  <Td>-</Td>
                  <Td>-</Td>
              </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
     </div>
    </>
  )
}

Tournament.getLayout = function getLayout(page: ReactElement){
  return (
    <Layout>
      {page}
    </Layout>
  )
}
