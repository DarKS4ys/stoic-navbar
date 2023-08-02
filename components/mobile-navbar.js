'use client';

import { Menu } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const MobileNavbar = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Prevents SSR issues if react-lottie or dependencies are null

  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="text-white hover:text-black" />
        </Button>
      </SheetTrigger>
      <SheetContent side="top" className="p-0">
        <div className="flex flex-col justify-center items-center m-8 tracking-widest">
          <p className="px-4 m-1 py-2 text-white hover:bg-white/10 hover:scale-110 rounded-lg transition duration-300">
            <Link href="#">Features</Link>
          </p>
          <p className="px-4 m-1 py-2 text-white hover:bg-white/10 hover:scale-110 rounded-lg transition duration-300">
            <Link href="#">Pricing</Link>
          </p>
          <p className="px-4 m-1 py-2 text-white  hover:bg-white/10 hover:scale-110 rounded-lg transition duration-300">
            <Link href="#">FAQs</Link>
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
