import Layout from '~/components/Layout'
import Head from 'next/head'
import React from 'react'
import type { ReactElement } from 'react'
import { api } from '~/utils/api'
import Link from 'next/link'

export default function AllTournament() {

  const {data: allTournament} = api.tournament.getAll.useQuery()

  return (
    <>
      <Head>
        <title>Turnamen</title>
      </Head>
      <div>
      {allTournament?.map((tournament)=>(
        <Link key={tournament?.id} href={`/tournament/${tournament?.id}`} className='min-w-[200px] h-[100px] rounded-xl border border-border hover:opacity-[0.2] transition-all ease-in-out duration-300'>
          <div>{tournament?.name}</div>
        </Link>
      ))}
      </div>
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