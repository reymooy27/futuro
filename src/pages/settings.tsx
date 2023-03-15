import Layout from '~/components/Layout'
import Head from 'next/head'
import React from 'react'

export default function Settings() {
  return (
    <>
      <Head>
        <title>Settings</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div>settings</div>
    </>
  )
}

Settings.getLayout = function getLayout(page: React.ReactElement){
  return (
    <Layout>
      {page}
    </Layout>
  )
}
