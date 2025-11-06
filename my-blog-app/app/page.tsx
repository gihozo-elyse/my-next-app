'use client'
import { useState, useEffect } from 'react'

export default function Home() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-yellow-700">Glad You are Here — Discover Digital Life & Smart Learning</h1>
      <p className="text-lg mb-4">Step into a space where tech meets everyday life and education becomes exciting. Learn, explore, and upgrade your mindset — one story at a time.</p>
      
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2  text-yellow-700">Stay in the Moment — Live Date & Time(CSR):</h2>
        <p className="text-lg">{currentTime.toLocaleString()}</p>
      </div>
    </div>
  )
}