import React from 'react'
import Image from 'next/image'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className='flex justify-center align-middle py-8'>
      <div className='flex gap-6'>
        <Image className="rounded-2xl object-cover" width={300} height={300} src="/assets/profile.jpg" alt="picture of myself" />
        <div className='space-y-2'>
          <h2 className="dark:text-white text-4xl max-w-96 font-extrabold">Bienvenido a mi blog personal!</h2>
          <p>Fullstack developer at <a href="https://sinaptia.dev/" className="link" target='_blank'>Sinaptia</a> and <a target='_blank' className="link" href="https://es.alliants.com/">Alliants</a></p>
          <div className='text-3xl flex gap-2'>
            <a href="https://github.com/jmsanchezdiaz" target='_blank' className="icon">
              <FaGithub />
            </a>
            <a className="icon" href="https://www.linkedin.com/in/juan-manuel-sanchez-diaz/" target='_blank'>
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
