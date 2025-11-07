export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container mx-auto p-4">
      <div className="flex gap-8 mt-0">
        
        <aside className="w-64 shrink-0">
          <div className="fixed top-0 left-0 mt-16 mr-4 bg-yellow-700 p-4 rounded-lg shadow-lg border z-40">
            <h3 className="font-bold text-lg mb-4 text-gray-800">Blog Categories</h3>
            <ul className="space-y-3">
              <li>
                <a href="/blog?category=tech" className="text-gray-50 hover:underline block py-2 px-3 rounded hover:bg-blue-200 transition-colors">
                   Technology
                </a>
              </li>
              <li>
                <a href="/blog?category=lifestyle" className="text-gray-50 hover:underline block py-2 px-3 rounded hover:bg-blue-200 transition-colors">
                   Lifestyle
                </a>
              </li>
              <li>
                <a href="/blog?category=education" className="text-gray-50 hover:underline block py-2 px-3 rounded hover:bg-blue-200 transition-colors">
                   Education
                </a>
              </li>
              <li>
                <a href="/blog?category=travel" className="text-gray-50 hover:underline block py-2 px-3 rounded hover:bg-blue-200 transition-colors">
                   Travel
                </a>
              </li>
              <li>
                <a href="/blog?category=food" className="text-gray-50 hover:underline block py-2 px-3 rounded hover:bg-blue-200 transition-colors">
                   Food
                </a>
              </li>
              <li>
                <a href="/blog?category=health" className="text-gray-50 hover:underline block py-2 px-3 rounded hover:bg-blue-200 transition-colors">
                   Health
                </a>
              </li>
              <li>
                <a href="/blog?category=business" className="text-gray-50 hover:underline block py-2 px-3 rounded hover:bg-blue-200 transition-colors">
                   Business
                </a>
              </li>
              <li>
                <a href="/blog?category=entertainment" className="text-gray-50 hover:underline block py-2 px-3 rounded hover:bg-blue-200 transition-colors">
                   Entertainment
                </a>
              </li>
            </ul>
          </div>
        </aside>
        
        
        <div className="flex-1 min-w-0">
          {children}
        </div>
      </div>
    </div>
  )
}