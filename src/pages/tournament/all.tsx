import Layout from '~/components/Layout'
import Head from 'next/head'
import React, { ReactElement } from 'react'

export default function AllTournament() {
  return (
    <>
      <Head>
        <title>Turnamen</title>
      </Head>
      <div>All</div>
    </>
  )
}

  AllTournament.getLayout = function getLayout(page: ReactElement){
    return (
      <Layout>
        {page}
      </Layout>
  )
  }