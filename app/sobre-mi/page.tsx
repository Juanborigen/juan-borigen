import Link from 'next/link'
import React from 'react'

const SobreMiPage = () => {
  return (
      <div className='flex justify-center items-center h-screen w-screen pt-12 '>
          <h1 className='text-7xl uppercase text-white'>Sobre Mi</h1>
          <Link href='/' className='text-white text-lg'>Volver</Link>
      </div>
  )
}

export default SobreMiPage