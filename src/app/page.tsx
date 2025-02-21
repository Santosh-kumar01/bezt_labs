
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className=' w-full h-full text-6xl flex justify-center items-center flex-col gap-2 font-serif'>
      Welcome
      <Link href="/products">
      <Button>Explore Products</Button>
      </Link>
    </div>
    
  )
}

export default page