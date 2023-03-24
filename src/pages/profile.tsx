import Layout from '~/components/Layout'
import Head from 'next/head'
import React, { ReactElement, useState } from 'react'
import { useSession } from 'next-auth/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Input,
  Spinner,
} from '@chakra-ui/react'
import {api} from '~/utils/api'
import Link from 'next/link'

export default function Profile() {

  const {data:session} = useSession()

  const myTeamData = api.team.getMyTeam.useQuery()
  const myTournament = api.tournament.getMyTournament.useQuery()


  return (
    <>
      <Head>
        <title>Profil</title>
      </Head>
      <div>
        <h1 className='tetx-xl font-bold'>Profil</h1>
        <h1>{session?.user?.name}</h1>
      </div>
      <div>
      </div>
      <div className="mt-5">
        <div className="w-full flex justify-between">
          <h1 className='font-bold text-xl'>Tim Saya</h1>
          <CreateTeam />
        </div>
        <div className="flex gap-3">
          {myTeamData?.data?.map(dt=>(
            <Link key={dt.id} href={`/team/${dt.id}`}>
              <div className='w-[100px] h-[100px] p-3 rounded border border-border bg-slate-300'>
                <h1>{dt.name}</h1>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-5">
        <div className='w-full flex justify-between'>
          <h1 className='font-bold text-xl'>Tournament</h1>
          <CreateTournament/>
        </div>
        <div className="flex gap-3">
          {myTournament?.data?.map(dt=>(
            <Link key={dt.id} href={`/tournament/${dt.id}`}>
            <div className='w-[100px] h-[100px] p-3 rounded border border-border bg-slate-300'>
              <h1>{dt.name}</h1>
            </div>
          </Link>
          ))}
        </div>
      </div>
    </>
  )
}

function CreateTeam() {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [loading, setLoading] = useState(false)

  const [input, setInput] = useState({
    name: ''
  })

  const {mutate, error} = api.team.createTeam.useMutation()

  function handleSubmit(){
    setLoading(true)
    mutate({name: input.name})
    setLoading(false)
    setInput({name: ''})
    onClose()
  }

  function handleChange(e){
    setInput({...input, [e.target.name]: e.target.value})
  }
  
  return (
    <>
      <Button onClick={onOpen}>Buat Tim</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Buat Tim</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input type="text" value={input.name} placeholder='Nama' name='name' onChange={handleChange}/>
          </ModalBody>

          <ModalFooter className='flex gap-3'>
            <Button variant='solid' onClick={handleSubmit}>{loading ? <Spinner/> : "Submit"}</Button>
            <Button colorScheme='blue' onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

function CreateTournament() {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [loading, setLoading] = useState(false)

  const [input, setInput] = useState({
    name: ''
  })

  const {mutate, error} = api.tournament.createTournament.useMutation()

  function handleSubmit(){
    setLoading(true)
    mutate({name: input.name})
    setLoading(false)
    setInput({name: ''})
    onClose()
  }

  function handleChange(e){
    setInput({...input, [e.target.name]: e.target.value})
  }
  
  return (
    <>
      <Button onClick={onOpen}>Buat Turnamen</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Buat Turnamen</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input type="text" value={input.name} placeholder='Nama' name='name' onChange={handleChange}/>
          </ModalBody>

          <ModalFooter className='flex gap-3'>
            <Button variant='solid' onClick={handleSubmit}>{loading ? <Spinner/> : "Submit"}</Button>
            <Button colorScheme='blue' onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}


Profile.getLayout = function getLayout(page: ReactElement){
  return (
    <Layout>
      {page}
    </Layout>
  )
}