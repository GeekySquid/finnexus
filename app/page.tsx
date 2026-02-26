import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Solutions from '@/components/Solutions'
import Pricing from '@/components/Pricing'
import Technology from '@/components/Technology'
import Footer from '@/components/Footer'
import ParticleSystem from '@/components/ParticleSystem'

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative">
      <ParticleSystem />
      <div className="relative z-10">
        <Header />
        <Hero />
        <Features />
        <Solutions />
        <Pricing />
        <Technology />
        <Footer />
      </div>
    </main>
  )
}