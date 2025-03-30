import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { UserButton, SignInButton, SignedOut, SignedIn, SignUpButton } from "@clerk/nextjs";

const Header = ({ isAdminPage = true }) => {
  return (
    <header className="bg-white text-black shadow-lg p-0 h-[10vh]">
      <nav className="flex justify-start items-center max-w-7xl mx-auto px-2 sm:px-4 h-full">
        <Link href={isAdminPage ? "/admin" : "/"} className="flex items-center space-x-2 h-full">
          <Image
            src="/carNova-1.jpg"
            alt="Logo"
            width={400}
            height={100}
            className="h-full w-auto object-contain rounded-lg bg-transparent border-none"
          />
          {isAdminPage && (
            <span className="ml-2 text-lg font-semibold text-gray-700">
              Admin
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
};

export default Header;