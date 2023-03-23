import Layout from '~/components/Layout'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { ReactElement } from 'react'
import { api } from '~/utils/api'

export default function Match() {

  const router = useRouter()

  const {data} = api.team.getTeamById.useQuery(parseInt(router?.query?.id as string, 10))

  return (
    <>
      <Head>
        <title>{data?.name}</title>
      </Head>
     <div>
      <h1>{data?.name}</h1>
     </div>
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
