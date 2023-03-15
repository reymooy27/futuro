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
} from '@chakra-ui/react'

export default function Profile() {
  const {data:session} = useSession()
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
        <CreateTeam />
      </div>
    </>
  )
}

function CreateTeam() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [input, setInput] = useState({
    name: ''
  })

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

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
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