import Layout from '~/components/Layout'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import type { ReactElement } from 'react'

export default function Match() {

  const router = useRouter()

  return (
    <>
      <Head>
        <title>Pertandingan</title>
      </Head>
     <div>{JSON.stringify(router.query)}</div>
    </>
  )
}

Match.getLayout = function getLayout(page: ReactElement){
  return (
    <Layout>
      {page}
    </Layout>
  )
}
