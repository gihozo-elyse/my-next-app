'use client'

export default function TestDark() {
  const testDark = () => {
    console.log('Button clicked!')
    const html = document.documentElement
    console.log('Current classes:', html.className)
    
    if (html.classList.contains('dark')) {
      html.classList.remove('dark')
      console.log('Removed dark class')
    } else {
      html.classList.add('dark')
      console.log('Added dark class')
    }
    
    console.log('New classes:', html.className)
  }

  return (
    <div className="flex flex-col gap-2">
      <button
        onClick={testDark}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Toggle Dark (Check Console)
      </button>
      <div className="p-4 bg-red-200 dark:bg-red-800 text-black dark:text-white">
        Test Box: Should change color
      </div>
    </div>
  )
}