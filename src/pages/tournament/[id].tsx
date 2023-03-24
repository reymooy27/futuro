import Layout from '~/components/Layout'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { ReactElement } from 'react'
import { api } from '~/utils/api'
import { Spinner } from '@chakra-ui/react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'

export default function Tournament() {

  const router = useRouter()

  const {data, isLoading} = api.tournament.getTournamentById.useQuery(parseInt(router.query.id as string, 10))

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
              {data?.teams?.map(team=>(
                <Tr key={team?.id}>
                  <Td contentEditable>-</Td>
                  <Td>-</Td>
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
