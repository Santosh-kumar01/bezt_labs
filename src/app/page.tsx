
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className=' w-full h-full flex justify-center items-center flex-col gap-5'>
      Welcome
      <Link href="/products">
      <Button>Explore Products</Button>
      </Link>
    </div>
    
  )
}

export default page