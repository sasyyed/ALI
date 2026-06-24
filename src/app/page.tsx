'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { isAuthenticated } from '@/lib/auth'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    if (isAuthenticated()) {
      router.replace('/dashboard')
    } else {
      router.replace('/login')
    }
  }, [router])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gaib-light">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gaib-dark mb-2">GAIB Agro</h1>
        <p className="text-gray-600">Loading...</p>
      </div>
    </div>
  )
}
