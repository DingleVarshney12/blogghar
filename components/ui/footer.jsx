import React from 'react'
import { Separator } from './separator'
import { navLinks } from '@/constant'
import { LocateIcon, Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='h-[50vh] border-t-px border-t-foreground' >
      <div className='flex justify-between flex-wrap gap-4 p-8'>
        <div
          className={`font-bold text-2xl py-2 md:py-4 md:px-2 flex gap-2 items-center justify-center `}
        >
          <div className="w-8 h-8 rounded-full bg-gray-100"></div>
          Blogghar
        </div>
        <div>
          <h3 className='font-bold text-lg mb-4'>Quick Links</h3>
          <ul>
            {navLinks.map((link, i) => (
              <li key={i} className='mb-2'>
                <Link href={link.path} className='hover:underline'>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='flex  flex-col gap-2'>
          <h3 className='font-bold text-lg mb-4'>Contact Us</h3>
          <p className='flex gap-2'><Mail/> :blogghar@gmail.com</p>
          <p className='flex gap-2'><Phone/>+1234567890</p>
          <p className='flex gap-2'><MapPin/>:123, Main Street, City, Country</p>
        </div>
      </div>
      <Separator />
      <div className='font-bold text-center py-4 px-6'>
        &copy; All copyrights by Blogghar
      </div>
    </footer>
  )
}

export default Footer