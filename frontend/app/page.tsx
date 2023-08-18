import FormInput from '@/components/FormInput'
import HeroSection from '@/components/HeroSection'
import React, { FC } from 'react'

const Home: FC = () => {
  return (
    <div className='flex-col items-center justify-center mt-6 w-full md:px-12 lg:px-24'>
      <HeroSection />
      <FormInput />
    </div>
  )
}

export default Home