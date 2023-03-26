import Layout from '~/components/Layout'
import Head from 'next/head'
import React from 'react'
import type { ReactElement } from 'react'

export default function Notification() {
  return (
    <>
      <Head>
        <title>Notification</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Notification</h1>
    </>
  )
}

Notification.getLayout = function getLayout(page: ReactElement){
  return (
    <Layout>
      {page}
    </Layout>
  )
}
