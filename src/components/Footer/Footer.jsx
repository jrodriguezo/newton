import React from 'react'

function Footer() {
  return (
    <footer className='flex flex-wrap justify-between gap-4 p-4 pt-8 bg-slate-800 w-full'>
        <a href='mailto:jrodriguezo.developer@gmail.com' className='hover:scale-110'>Support</a>
        <a href='#' className='pointer-events-none opacity-25'>Terms</a>
        <a href='#' className='pointer-events-none opacity-25'>Cookies</a>
    </footer>
  )
}

export default Footer