import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className=" flex justify-between items-center px-6 pt-3 ">
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
