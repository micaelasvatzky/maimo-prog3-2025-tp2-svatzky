'use client'

import Image from "next/image";
import Link from "next/link";
import { useAppContext } from "@/app/contexts/AppContext";


const Navbar = () => {
 
   const { favoritesQty } = useAppContext();

  return (
   <div className="fixed top-0 left-0 w-full z-50 bg-black/35 shadow-md px-6 pt-3 lg:pt-2 lg:pb-1 md:pr-6 pb-2">
  <div className="flex flex-col md:flex-row md:justify-between md:items-center">
    <Link href="/"><Image src="/assets/Logo.png" width={175} height={175} alt="Logo popcorn.js" /></Link>

    <nav className="mt-4 md:mt-0">
      <ul className="flex flex-row justify-around items-center gap-2 md:gap-8 text-white font-bold text-xl md:text-base">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/genres">Genres</Link></li>
         <li>
              <Link href="/favorites" className="flex items-center gap-1">
                Favorites
                  <span className="bg-amber-300 text-black text-sm px-2.5 py-1  rounded-full">
                    {favoritesQty()}
                  </span>
              </Link>
              </li>
      </ul>
    </nav>
  </div>
</div>
  );
};

export default Navbar;

