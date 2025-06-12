import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 pt-3 bg-black/20 shadow-md">
      <Image src="/assets/Logo.png" width={175} height={175} alt="Logo popcorn.js"/>
      <nav>
        <ul className="flex row justify-between items-center gap-5 text-white font-bold">
          <li><Link href="/">Home</Link></li>
          <li>Genres</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

