'use client'

import Link from 'next/link'
import { Icon } from '@iconify/react'
import Footer from '@/component/Footer'

export default function NotFound() {
  return (
    <div className="relative flex h-screen flex-col items-center justify-center bg-slate-900 px-6 text-white text-center">
      <div className='flex flex-col px-6 items-center justify-center gap-2'>

        <Icon icon="mdi:emoticon-sad-outline" className="text-red-500 w-24 h-24 mb-4" />

        <h1 className="text-4xl font-extrabold text-red-500">404 - Page Not Found</h1>

        <p className="mt-3 text-gray-400 max-w-md">
          Looks like this page has gone missing. Maybe it moved, maybe it never existed.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 transition px-4 py-2 rounded-md text-white font-medium"
        >
          <Icon icon="mdi:arrow-left" className="w-5 h-5" />
          Go Back Home
        </Link>
      </div>
      <div className='w-full absolute bottom-0 px-6 pb-2'>
      <Footer />
      </div>
    </div>
  )
}
