import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-10 w-full bg-transparent">
      <div className="px-4 mx-auto ">
        <div className="flex items-center justify-between h-16">
          <span className="text-2xl font-semibold text-gray-900">OnMovie</span>
          <div className="flex space-x-4 text-gray-900">
            <a href="#">Tranding</a>
            <Link href="movies">
              <a>Movies</a>
            </Link>
            <a href="#">Series</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
