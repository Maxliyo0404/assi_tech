
import React from 'react'
import Hero from '@/Components/Home/Hero'
import About from '@/Components/Home/About'
import Kurs from '@/Components/Home/Kurs'
import Numbers from '@/Components/Home/Numbers'
import Support from '@/Components/Home/Support'
import SupplySection from '@/Components/Home/Supply'

export default function Homepage() {
  return (
    <>
    <Hero/>
    <About/>
    <Kurs/>
    <Numbers/>
    <Support/>
    <SupplySection/>
    </>
  )
}
