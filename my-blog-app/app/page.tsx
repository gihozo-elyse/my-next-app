'use client'
import { useState, useEffect } from 'react'

export default function Home() {
  const [currentTime, setCurrentTime] = useState<string>('Loading...')

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(new Date().toLocaleString())
    }
    
    updateTime() 
    const timer = setInterval(updateTime, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4 text-yellow-700 dark:text-yellow-400">Glad You are Here — Discover Digital Life & Smart Learning</h1>
        <p className="text-lg mb-6 text-gray-800 dark:text-gray-200">Step into a space where tech meets everyday life and education becomes exciting. Learn, explore, and upgrade your mindset — one story at a time.</p>
        
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-3 text-yellow-700 dark:text-yellow-400">Stay in the Moment — Live Date & Time (CSR):</h2>
          <p className="text-lg text-gray-800 dark:text-gray-200 font-mono">{currentTime}</p>
        </div>
      </div>
    </div>
  )
}