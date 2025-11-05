import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Blog App",
  description: "my simple blog  app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body  className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="min-h-screen flex flex-col">
          <header className="bg-yellow-700 text-white p-4">
            <nav className="container mx-auto">
              <ul className="flex space-x-6">
                <li><a href="/" className="hover:underline">Home</a></li>
                <li><a href="/about" className="hover:underline">About</a></li>
                <li><a href="/blog" className="hover:underline">Blog</a></li>
                </ul>
            </nav>
          </header>
          <main className="flex-grow container mx-auto p-4">
                
      
             {children}
        </main>
        <footer className="bg-gray-800 text-white p-4 text-center" >
<p>&copy; 2024 My Blog App. All rights reserved.</p>
        </footer>
        </div>
      </body>
    </html>
  );
}
