import React from 'react'
import Hero from '../components/HeroSection'
import Logos from '../components/Logos'
import Solutions from '../components/ModularSolutions'
import Products from '../components/FeaturesGrid'
import Integrations from '../components/Integrations'
import Testimonials from '../components/Testimonials'
import PricingTeaser from '../components/PricingTeaser'

export default function Home(){
  return (
    <div className="pt-[80px]">
      <Hero />
      <Logos />
      <Solutions />
      <Products />
      <Integrations />
      <Testimonials />
      <PricingTeaser />
    </div>
  )
}
