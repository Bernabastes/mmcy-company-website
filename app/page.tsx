import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { Gym } from '@/components/gym'
import { Facilities } from '@/components/facilities'
import { Testimonials } from '@/components/testimonials'
import { MemberPortalPreview } from '@/components/member-portal-preview'
import { Careers } from '@/components/careers'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gym />
      <Facilities />
      <Testimonials />
      <MemberPortalPreview />
      <Careers />
      <Contact />
      <Footer />
    </main>
  )
}
