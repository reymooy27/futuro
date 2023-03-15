import Layout from '~/components/Layout'
import Head from 'next/head'
import React, { ReactElement } from 'react'

export default function Profile() {
  return (
    <>
      <Head>
        <title>Profil</title>
      </Head>
      <div>profile</div>
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