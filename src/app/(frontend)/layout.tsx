import { Suspense } from 'react'
import { io } from 'next/cache'
import { SanityLive } from '@/sanity/lib/live'

async function SanityLiveStream() {
  await io()
  return <SanityLive />
}

export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      {children}
      <Suspense fallback={null}>
        <SanityLiveStream />
      </Suspense>
    </>
  )
}