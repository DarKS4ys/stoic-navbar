import Link from 'next/link';
import './globals.css';
import { Inter } from 'next/font/google';
import Button from '@/components/button';
import MobileNavbar from '@/components/mobile-navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Stoic Navbar Test',
  description: 'STOIC',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-black">
          <div className="h-20 bg-black fixed w-full z-10">
            <div className="flex justify-center items-center h-full">
              <div className="absolute left-10">
                <Link href="#" className="tracking-widest py-2 text-white">
                  STOIC
                </Link>
              </div>
              <div className="absolute right-10 hidden md:flex">
                <Button />
              </div>
              <div className="absolute right-10">
                <MobileNavbar />
              </div>
              <div className="justify-center flex-grow hidden md:flex">
                <p className="px-4 mx-1 py-2 text-sm text-white hover:bg-white/10 hover:scale-110 rounded-lg transition duration-300">
                  <Link href="#">Features</Link>
                </p>
                <p className="px-4 mx-1 py-2 text-sm text-white hover:bg-white/10 hover:scale-110 rounded-lg transition duration-300">
                  <Link href="#">Pricing</Link>
                </p>
                <p className="px-4 mx-1 py-2 text-sm text-white  hover:bg-white/10 hover:scale-110 rounded-lg transition duration-300">
                  <Link href="#">FAQs</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
