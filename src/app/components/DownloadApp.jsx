"use client"
import React from 'react'
import IOS from "../../../public/ios.png";
import PLAYSTORE from "../../../public/android.png";
import APPBANNER from "../../../public/appBanner.png";
import Image from 'next/image';
import Link from 'next/link';

const DownloadApp = () => {
  return (
    <div className='sm:text-start px-5 lg:px-10 py-10 text-center mt-10 w-[90%] sm:w-[85%] lg:w-[75%] rounded-3xl m-auto bg-[#fffcf1] flex flex-col-reverse gap-10 sm:flex-row justify-between'>
        <div className='lg:w-[50%] sm:w-[80%] sm:mt-20'>
            <div className='text-6xl sm:text-4xl lg:text-5xl font-semibold'>Download the App</div>
            <div className='text-gray-500 mt-5 tracking-wider text-lg'>
                Plus, a revolutionary app that helps Indian homemakers to pre-plan their jewellery purchase by saving monthly & gaining 10% IRR
            </div>
            <div className='flex gap-5 mt-10'>
                <Link href='https://play.google.com/store/apps/details?id=com.fs.getplus' target='_blank'>
                    <Image width={120} src={PLAYSTORE} alt={PLAYSTORE}/>
                </Link>
                <Link href='https://apps.apple.com/in/app/plus-gold-save-for-jewellery/id6443759619?platform=iphone' target='_blank'>
                    <Image width={120} src={IOS} alt={IOS}/>
                </Link>
            </div>
        </div>

        <div>
            <Image className='block m-auto' src={APPBANNER} alt={APPBANNER}/>
        </div>
    </div>
  )
}

export default DownloadApp