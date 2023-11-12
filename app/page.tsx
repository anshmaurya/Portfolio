import Header from '@/components/header'
import Into from '@/components/into'
import React from 'react'
import Divider from '@/components/section-divider'
import About from '@/components/about'
import Skills from '@/components/skills'
import Contact from '@/components/contact'


const page = () => {
  return (
    <main className='flex flex-col items-center px-4'>
    <Into/>
    <Divider />
    <About/>
    <Skills/>
    <Contact/>
    
    
    </main>
    
  )
}

export default page