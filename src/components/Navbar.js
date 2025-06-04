import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-6 bg-sky-400 lg:bg-lime-600">
      <Image src="/assets/Logo.png" width={175} height={175} alt="Logo popcorn.js"/>
      <nav>
        <ul className="flex row justify-between items-center gap-5">
          <li>Home</li>
          <li>Movies</li>
          <li>Genres</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
