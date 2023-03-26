import Layout from '~/components/Layout'
import Head from 'next/head'
import React from 'react'
import type { ReactElement } from 'react'

export default function AllMatch() {
  return (
    <>
      <Head>
        <title>Pertandingan</title>
      </Head>
      <div>All</div>
    </>
  )
}

  AllMatch.getLayout = function getLayout(page: ReactElement){
    return (
      <Layout>
        {page}
      </Layout>
  )
  }