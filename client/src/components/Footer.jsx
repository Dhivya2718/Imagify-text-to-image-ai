import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20'>
        <img width={150} src={assets.logo} alt="" />
       <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>
  © {new Date().getFullYear()} Imagify | Built by <a href="https://github.com/dhi1827" className="text-blue-500" target="_blank" rel="noopener noreferrer">dhi1827</a>. All rights reserved.
</p>

        <div className='flex gap-2.5'>
            <img width={35} src={assets.facebook_icon} alt="" />
            <img width={35} src={assets.twitter_icon} alt="" />
            <img width={35} src={assets.instagram_icon} alt="" />
        </div>
    </div>
  )
}

export default Footer