import Image from "next/image";
import Link from "next/link";



const Navbar = () => {
   
  return (
   <div className="fixed top-0 left-0 w-full z-50 bg-black/35 shadow-md px-6 pt-3 md:pr-10">
  <div className="flex flex-col md:flex-row md:justify-between md:items-center">
    <Image src="/assets/Logo.png" width={175} height={175} alt="Logo popcorn.js" />

    <nav className="mt-4 md:mt-0">
      <ul className="flex flex-row justify-around items-center  gap-2 md:gap-8 text-white font-bold text-xl md:text-base">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/genres">Genres</Link></li>
        <li><Link href="/favorites">Favorites</Link></li>
      </ul>
    </nav>
  </div>
</div>
  );
};

export default Navbar;

