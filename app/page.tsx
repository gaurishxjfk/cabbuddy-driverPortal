import Nav from '@/components/Navbar'
import Hero from '@/components/Hero'
import ConfirmBooking from '@/components/Modals/ConfirmBooking'

export default function Home() {
  return (
    <main className="h-screen w-full bg-mainbg relative">
      {/* Navbar */}
      <Nav />
      {/* Hero component */}
        <Hero />
          <ConfirmBooking />
      
    </main>
  )
}
