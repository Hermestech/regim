import { Hero } from '@/components/templates/hero'
import { Features } from '@/components/templates/features'
import { Tools } from '@/components/templates/tools'
import { Footer } from '@/components/molecules/footer'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Tools />
      <Footer />
    </>
  )
}
