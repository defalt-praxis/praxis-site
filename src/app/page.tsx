import Hero from '@/components/Hero'
import About from '@/components/About'
import Products from '@/components/Products'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Hero />
      <About />
      <Products />
      <Contact />
    </main>
  )
}
