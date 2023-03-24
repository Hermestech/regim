import Head from 'next/head'
import Image from 'next/image'
import { Hero } from '@/components/templates/hero'
import { Features } from '@/components/templates/features'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
    </>
  )
}
