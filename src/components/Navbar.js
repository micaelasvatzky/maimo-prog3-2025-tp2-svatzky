const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-6 mb-4 bg-sky-400 lg:bg-lime-600">
      <div>Logo</div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Géneros</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
