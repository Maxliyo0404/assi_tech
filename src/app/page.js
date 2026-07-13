
import React from 'react'
import Hero from '@/Components/Home/Hero'
import About from '@/Components/Home/About'
import Kurs from '@/Components/Home/Kurs'
import Numbers from '@/Components/Home/Numbers'
import Support from '@/Components/Home/Support'
import SupplySection from '@/Components/Home/Supply'
import ContactSection from '@/Components/Home/ContactSection'

export default function Homepage() {
  return (
    <>
    <Hero/>
    <About/>
    <Kurs/>
    <Numbers/>
    <Support/>
    <SupplySection/>
    <ContactSection/>
    </>
  )
}
