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
          <header className="bg-yellow-700 text-white p-4 fixed top-0 left-0 right-0 z-50">
            <nav className="container mx-auto">
              <ul className="flex space-x-6">
                <li><link href="/" className="hover:underline">Home</link></li>
                <li><link href="/about" className="hover:underline">About</link></li>
                <li><link href="/blog" className="hover:underline">Blog</link></li>
                </ul>
            </nav>
          </header>
          <main className="flex-grow' container mx-auto p-4">
                
      
             {children}
        </main>
        <footer className="bg-gray-800 text-white p-4 text-center " >
<p>&copy; 2025 My Blog App. All rights reserved.</p>
        </footer>
        </div>
      </body>
    </html>
  );
}
