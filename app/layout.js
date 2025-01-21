import Link from 'next/link';
import './globals.css'; // Import Tailwind CSS

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Video Editor</title>
      </head>
      <body className="bg-blue-200">
        {/* Header (Navbar) */}
        <header className="bg-gray-900 text-white shadow-md py-4">
          <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4">
            <Link href="/" className="text-3xl font-bold">
              <span className="text-blue-500">Video</span>Editor
            </Link>
            <nav>
              <ul className="flex space-x-8 text-lg">
                <li>
                  <Link href="/" className="hover:text-blue-500 transition">Home</Link>
                </li>
                <li>
                  <Link href="/#pricing" className="hover:text-blue-500 transition">Pricing</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-6 mt-12">
          <div className="max-w-screen-xl mx-auto text-center">
            <p>&copy; {new Date().getFullYear()} Video Editor. All rights reserved.</p>
            <p className="text-sm mt-2">Built with love and Next.js.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
