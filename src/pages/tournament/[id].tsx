import Layout from '~/components/Layout'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { ReactElement } from 'react'

export default function Tournament() {

  const router = useRouter()

  return (
    <>
      <Head>
        <title>Turnamen</title>
      </Head>
     <div>{JSON.stringify(router.query)}</div>
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
