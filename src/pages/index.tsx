import Head from 'next/head'
import Link from 'next/link'
import type { ReactElement } from 'react'
import Layout from '~/components/Layout'
import { api } from '~/utils/api'

export default function Home() {

  const {data: allTournament} = api.tournament.getAll.useQuery()

  return (
    <>
      <Head>
        <title>Futuro</title>
        <meta name="description" content="Futuro - Futsal Tournament Management" />
        <meta name="keywords" content="futsal, management, sports, tournament" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='w-full h-[9em] md:h-[14em] p-2 border border-border rounded-xl '>
        <h1>Banner</h1>
      </div>

      <div className='w-full mt-4'>
        <div className="w-full flex justify-between items-center">
          <h1>Turnamen</h1>
          <Link href='/tournament/all' className='text-[12px]'>Lihat Semua</Link>
        </div>
        <div className='w-full flex gap-3 overflow-x-auto mt-2'>
          {allTournament?.map((tournament)=>(
            <Link key={tournament?.id} href={`/tournament/${tournament?.id}`} className='min-w-[200px] h-[100px] rounded-xl border border-border hover:opacity-[0.2] transition-all ease-in-out duration-300'>
              <div>{tournament.name}</div>
            </Link>
          ))}
        </div>
      </div>

      <div className='w-full mt-4'>
        <div className='w-full flex justify-between items-center'>
          <h1>Pertandingan Hari Ini</h1>
          <Link href='/match/all' className='text-[12px]'>Lihat Semua</Link>
        </div>
        <div className='w-full flex flex-col gap-3 mt-2'>
          {Array(5).fill('').map((match, i)=>(
            <Link key={i} href={`/match/${i}`}>
              <div className='w-full bg-slate-500 rounded-xl p-3 flex items-center justify-center gap-3'>
                <div className='flex gap-3 items-center'>
                  <span>Chelsea</span>
                  <div className='w-[40px] h-[40px] bg-red-500 rounded-full'></div>
                </div>
                <span>VS</span>
                <div className='flex gap-3 items-center'>
                  <div className='w-[40px] h-[40px] bg-red-500 rounded-full'></div>
                  <span>Chelsea</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement){
  return (
    <Layout>
      {page}
    </Layout>
  )
}