import Layout from '~/components/Layout'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import type { ReactElement } from 'react'
import { api } from '~/utils/api'
import Link from 'next/link'

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
      <div className="mt-3">
        <h1 className="font-bold text-xl">Turnamen</h1>
        <div className='flex gap-3'>
          {data?.tournaments?.map(tournament=>(
            <Link href={`/tournament/${tournament?.id}`} className='p-3 bg-slate-300 rounded' key={tournament?.id}>{tournament?.name}</Link>
          ))}
        </div>
      </div>
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
