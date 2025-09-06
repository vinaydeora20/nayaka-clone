
import { FaSearch, FaShoppingBag, FaUser, FaHeart } from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';
import { IoIosArrowDown } from 'react-icons/io';
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cardItem = useSelector((store) => store.cart.items);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-[#f43397] text-white text-center py-2 text-sm">
        Free Delivery on Orders Above ₹499
      </div>

{/* Main Navbar */}
<header className="bg-white shadow-md sticky top-0 z-50">
  <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      {/* Mobile Menu Button and Logo (grouped together) */}
      <div className="flex items-center sm:hidden">
        <button className="text-gray-700 mr-4" onClick={toggleMobileMenu}>
          <HiMenu className="text-2xl" />
        </button>
        {/* Logo - Mobile */}
        <div className="flex-shrink-0">
          <Link to="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="72" height="24" viewBox="0 0 72 24" class="css-1n7yb1s"><path fill="#000F1D" fill-opacity=".92" d="M20.746 1.201C21.523-.322 19.004.107 19.004.107c-.901 0-1.306 1.11-1.492 1.427L14.79 7.007c-.513.904-2.208 4.775-2.768 5.631-.046-.872.016-2.617.031-3.03.11-1.65.218-2.902.39-4.41.124-1.173.372-2.49.14-3.664-.156-.73-.39-.777-1.416-.888-1.073-.111-1.803 1.475-2.16 2.22C7.7 5.628 6.24 8.325 5.072 11.148c-.342.825-.761 1.65-1.119 2.459-.42.983-.808 1.951-1.26 2.919-.481 1.015-1.99 4.346-2.41 5.393-.466 1.142-.559 2.062 1.307 2.015.295 0 .948.063 1.757-.825.637-.698.762-1.349 1.135-2.316 1.337-3.427 2.285-5.695 3.747-9.09.14-.333.466-1.3.793-2.046-.016 1.063-.187 2.332-.265 3.173-.248 3.077-.42 6.043-.684 9.09-.03.412-.14.903.047 1.284.186.38.653.476 1.026.523 1.493.19 1.648-.57 2.115-1.618.42-.935.668-1.697 1.041-2.649 1.15-2.934 2.364-5.837 3.7-8.692.343-.73.685-1.444 1.058-2.158.684-1.316 1.244-2.554 1.99-4.013.56-1.047 1.104-2.237 1.695-3.395zm51.23 8.265c-.171-1.761-2.534-.873-3.95-.603-.528.095-2.16.412-4.042.777-.077-1.983-.046-1.586-.062-2.792-.046-1.744-.14-3.109-.233-4.647-.062-.968-.202-2.316-1.912-2.063-1.99.286-2.317 1.301-2.846 2.523-1.383 3.188-1.337 3.204-2.907 6.757-.125.27-.7 1.698-.793 1.983-.062.016-.187.048-.342.095l-2.27.508.015-.08c.203-1.617.451-3.235.669-4.854.202-1.475.42-3.886.59-5.361C54.08.123 52.278.154 52.278.154c-1.104-.063-1.524.27-2.224 1.19-1.197 1.586-2.643 3.3-3.918 5.044-2.316 3.157-4.01 5.537-6.11 8.71-.606.92-1.54 2.315-2.348 3.41-.544-1.095-1.01-2.3-1.461-3.41-.653-1.587-1.135-2.57-1.446-3.618-.28-.92.062-1.047.73-1.57 1.929-1.491 4.105-2.522 6.08-3.95 1.4-1.015 3.078-2.141 4.447-3.188 0 0 .793-.476 1.228-1.079.544-.761-.995-1.555-.995-1.555-.87-.142-1.353.064-1.96.35-.621.285-1.43.935-1.958 1.364-1.166.92-2.643 2.014-3.794 2.934-1.415 1.127-2.379 1.824-3.934 2.76l3.95-6.027c1.29-1.698-2.13-2.174-3.436-.381-1.213 1.602-2.037 3.014-2.986 4.473-2.285 3.474-4.167 7.123-6.048 10.945-.715 1.46-1.415 2.983-2.068 4.49-.31.73-1.228 2.41.031 2.585 2.69.35 3.126-.951 3.732-2.522.995-2.586 1.321-3.061 1.959-4.664.622-1.554 1.073-2.442 1.772-3.775.016-.016.218-.349.218-.349.124.27.948 3.062 1.057 3.379.56 1.507 1.54 5.028 2.1 6.63.404 1.333.512 1.714 2.27 1.666.87-.016 1.243-.365 1.818-1.475.576-1.11 3.063-5.838 3.063-5.838.747-.127 1.82-.317 2.52-.444.123-.016.403-.08.792-.158.264-.032.482-.08.653-.127.016 0 .016 0 .031-.016.684-.143 1.555-.317 2.503-.508-.17.873-.7 2.792-.808 3.284 0 0-1.15 4.568.342 4.806.933.143 1.415-.016 1.415-.016 1.741-.206 1.772-2.601 1.772-2.601l.949-6.202c.684-.143 1.368-.286 2.036-.413L52.2 21.363c-.295 1-.513 2.284 1.244 2.284 1.43.08 1.524-.84 1.524-.84.03-.143 1.166-3.871 1.446-5.204.186-.856.855-3.061 1.119-3.95.746-.142 1.306-.253 1.57-.3.311-.048.918-.16 1.71-.286-.015.825 0 1.967.016 2.125.171 2.507-.015 5.108.498 7.567.077.396.233.904.73.904.591 0 .778-.063 1.4-.111 1.803-.159 1.477-2.015 1.368-3.188-.124-1.301-.249-2.396-.42-3.697-.14-1.062-.233-2.458-.249-4.14v-.031c2.954-.508 6.142-1.063 6.608-1.143.747-.206 1.368-.142 1.213-1.887zm-23.089 3.331c0 .016-.015.016-.015.032-2.068.46-4.012.904-5.1 1.158C44.86 12.13 49.65 5.373 50.38 4.58c-.404 2.094-1.057 5.98-1.493 8.217zm11.941-2.665v.111c-.995.19-1.928.38-2.674.524.948-2.507 1.943-5.584 2.534-7.139-.046 1.158.187 5.362.14 6.504zM31.831 2.661c.311-.587 1.011-1.745.14-2.19C31.458.219 30.774.06 30.245.33c-.435.238-.761.698-.979 1.126l-3.327 5.346c-.544.761-1.058 1.713-2.161 1.84-.731.08-1.26-.238-1.244-.904.015-.682.404-1.587.7-2.173.87-1.682.979-2.253 1.818-3.919.809-1.602-1.834-1.967-2.487-.809-.467.825-1.368 2.38-1.57 2.903-.374.952-3.172 5.489-1.96 7.281 1.555 2.03 5.691-1.174 3.576 2.523-1.71 2.966-2.783 4.663-4.275 7.407-.327.587-.73 1.174-.84 1.872-.155.984 1.166.968 1.742.936 1.01-.08 1.492-.555 1.896-1.49.218-.493.514-1.095.731-1.587 1.96-4.362 4.043-8.154 6.624-12.373 1.228-1.999 2.316-3.712 3.342-5.647z"></path></svg>
          </Link>
        </div>
      </div>

      {/* Desktop Logo - Hidden on mobile */}
      <div className="hidden sm:flex flex-shrink-0">
        <Link to="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="72" height="24" viewBox="0 0 72 24" class="css-1n7yb1s"><path fill="#000F1D" fill-opacity=".92" d="M20.746 1.201C21.523-.322 19.004.107 19.004.107c-.901 0-1.306 1.11-1.492 1.427L14.79 7.007c-.513.904-2.208 4.775-2.768 5.631-.046-.872.016-2.617.031-3.03.11-1.65.218-2.902.39-4.41.124-1.173.372-2.49.14-3.664-.156-.73-.39-.777-1.416-.888-1.073-.111-1.803 1.475-2.16 2.22C7.7 5.628 6.24 8.325 5.072 11.148c-.342.825-.761 1.65-1.119 2.459-.42.983-.808 1.951-1.26 2.919-.481 1.015-1.99 4.346-2.41 5.393-.466 1.142-.559 2.062 1.307 2.015.295 0 .948.063 1.757-.825.637-.698.762-1.349 1.135-2.316 1.337-3.427 2.285-5.695 3.747-9.09.14-.333.466-1.3.793-2.046-.016 1.063-.187 2.332-.265 3.173-.248 3.077-.42 6.043-.684 9.09-.03.412-.14.903.047 1.284.186.38.653.476 1.026.523 1.493.19 1.648-.57 2.115-1.618.42-.935.668-1.697 1.041-2.649 1.15-2.934 2.364-5.837 3.7-8.692.343-.73.685-1.444 1.058-2.158.684-1.316 1.244-2.554 1.99-4.013.56-1.047 1.104-2.237 1.695-3.395zm51.23 8.265c-.171-1.761-2.534-.873-3.95-.603-.528.095-2.16.412-4.042.777-.077-1.983-.046-1.586-.062-2.792-.046-1.744-.14-3.109-.233-4.647-.062-.968-.202-2.316-1.912-2.063-1.99.286-2.317 1.301-2.846 2.523-1.383 3.188-1.337 3.204-2.907 6.757-.125.27-.7 1.698-.793 1.983-.062.016-.187.048-.342.095l-2.27.508.015-.08c.203-1.617.451-3.235.669-4.854.202-1.475.42-3.886.59-5.361C54.08.123 52.278.154 52.278.154c-1.104-.063-1.524.27-2.224 1.19-1.197 1.586-2.643 3.3-3.918 5.044-2.316 3.157-4.01 5.537-6.11 8.71-.606.92-1.54 2.315-2.348 3.41-.544-1.095-1.01-2.3-1.461-3.41-.653-1.587-1.135-2.57-1.446-3.618-.28-.92.062-1.047.73-1.57 1.929-1.491 4.105-2.522 6.08-3.95 1.4-1.015 3.078-2.141 4.447-3.188 0 0 .793-.476 1.228-1.079.544-.761-.995-1.555-.995-1.555-.87-.142-1.353.064-1.96.35-.621.285-1.43.935-1.958 1.364-1.166.92-2.643 2.014-3.794 2.934-1.415 1.127-2.379 1.824-3.934 2.76l3.95-6.027c1.29-1.698-2.13-2.174-3.436-.381-1.213 1.602-2.037 3.014-2.986 4.473-2.285 3.474-4.167 7.123-6.048 10.945-.715 1.46-1.415 2.983-2.068 4.49-.31.73-1.228 2.41.031 2.585 2.69.35 3.126-.951 3.732-2.522.995-2.586 1.321-3.061 1.959-4.664.622-1.554 1.073-2.442 1.772-3.775.016-.016.218-.349.218-.349.124.27.948 3.062 1.057 3.379.56 1.507 1.54 5.028 2.1 6.63.404 1.333.512 1.714 2.27 1.666.87-.016 1.243-.365 1.818-1.475.576-1.11 3.063-5.838 3.063-5.838.747-.127 1.82-.317 2.52-.444.123-.016.403-.08.792-.158.264-.032.482-.08.653-.127.016 0 .016 0 .031-.016.684-.143 1.555-.317 2.503-.508-.17.873-.7 2.792-.808 3.284 0 0-1.15 4.568.342 4.806.933.143 1.415-.016 1.415-.016 1.741-.206 1.772-2.601 1.772-2.601l.949-6.202c.684-.143 1.368-.286 2.036-.413L52.2 21.363c-.295 1-.513 2.284 1.244 2.284 1.43.08 1.524-.84 1.524-.84.03-.143 1.166-3.871 1.446-5.204.186-.856.855-3.061 1.119-3.95.746-.142 1.306-.253 1.57-.3.311-.048.918-.16 1.71-.286-.015.825 0 1.967.016 2.125.171 2.507-.015 5.108.498 7.567.077.396.233.904.73.904.591 0 .778-.063 1.4-.111 1.803-.159 1.477-2.015 1.368-3.188-.124-1.301-.249-2.396-.42-3.697-.14-1.062-.233-2.458-.249-4.14v-.031c2.954-.508 6.142-1.063 6.608-1.143.747-.206 1.368-.142 1.213-1.887zm-23.089 3.331c0 .016-.015.016-.015.032-2.068.46-4.012.904-5.1 1.158C44.86 12.13 49.65 5.373 50.38 4.58c-.404 2.094-1.057 5.98-1.493 8.217zm11.941-2.665v.111c-.995.19-1.928.38-2.674.524.948-2.507 1.943-5.584 2.534-7.139-.046 1.158.187 5.362.14 6.504zM31.831 2.661c.311-.587 1.011-1.745.14-2.19C31.458.219 30.774.06 30.245.33c-.435.238-.761.698-.979 1.126l-3.327 5.346c-.544.761-1.058 1.713-2.161 1.84-.731.08-1.26-.238-1.244-.904.015-.682.404-1.587.7-2.173.87-1.682.979-2.253 1.818-3.919.809-1.602-1.834-1.967-2.487-.809-.467.825-1.368 2.38-1.57 2.903-.374.952-3.172 5.489-1.96 7.281 1.555 2.03 5.691-1.174 3.576 2.523-1.71 2.966-2.783 4.663-4.275 7.407-.327.587-.73 1.174-.84 1.872-.155.984 1.166.968 1.742.936 1.01-.08 1.492-.555 1.896-1.49.218-.493.514-1.095.731-1.587 1.96-4.362 4.043-8.154 6.624-12.373 1.228-1.999 2.316-3.712 3.342-5.647z"></path></svg>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden sm:flex space-x-6">
        <div className="group relative">
          <button className="flex items-center text-sm font-medium uppercase text-gray-700 hover:text-[#f43397]">
            Shop <IoIosArrowDown className="ml-1" />
          </button>
          <div className="hidden group-hover:block absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10">
            <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-[#f43397]">Makeup</Link>
            <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-[#f43397]">Skincare</Link>
            <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-[#f43397]">Haircare</Link>
          </div>
        </div>
        <Link to="#" className="text-sm font-medium uppercase text-gray-700 hover:text-[#f43397]">Brands</Link>
        <Link to="#" className="text-sm font-medium uppercase text-gray-700 hover:text-[#f43397]">Offers</Link>
        <Link to="#" className="text-sm font-medium uppercase text-gray-700 hover:text-[#f43397]">Beauty Advice</Link>
      </nav>

      {/* Desktop Search - Hidden on mobile */}
      <div className="hidden sm:flex items-center bg-[#f5f5f6] rounded-md px-4 py-2 w-64 mx-4">
        <FaSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search on Nykaa"
          className="bg-transparent outline-none w-full text-sm"
        />
      </div>

      {/* Action Icons */}
      <div className="flex items-center space-x-4">
        <div className="hidden sm:block relative">
          <FaUser className="text-xl text-gray-700" />
        </div>
        <div className="hidden sm:block relative">
          <FaHeart className="text-xl text-gray-700" />
          {cardItem.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#f43397] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cardItem.length}
            </span>
          )}
        </div>
        <Link to="/cart" className="relative">
          <FaShoppingBag className="text-xl text-gray-700" />
          {cardItem.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#f43397] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cardItem.length}
            </span>
          )}
        </Link>
        <button className="sm:hidden" onClick={() => setShowMobileSearch(!showMobileSearch)}>
          <FaSearch className="text-xl text-gray-700" />
        </button>
      </div>
    </div>

    {/* Mobile Search */}
    {showMobileSearch && (
      <div className="sm:hidden py-3">
        <div className="flex items-center bg-[#f5f5f6] rounded-md px-4 py-2">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search for products, brands..."
            className="bg-transparent outline-none w-full text-sm"
          />
        </div>
      </div>
    )}

    {/* Category Bar */}
    <div className="bg-white overflow-x-auto no-scrollbar py-3 hidden sm:block">
      <div className="flex space-x-6">
        <Link to="#" className="whitespace-nowrap text-sm font-medium text-gray-700 hover:text-[#f43397]">Makeup</Link>
        <Link to="#" className="whitespace-nowrap text-sm font-medium text-gray-700 hover:text-[#f43397]">Skincare</Link>
        <Link to="#" className="whitespace-nowrap text-sm font-medium text-gray-700 hover:text-[#f43397]">Hair</Link>
        <Link to="#" className="whitespace-nowrap text-sm font-medium text-gray-700 hover:text-[#f43397]">Bath & Body</Link>
        <Link to="#" className="whitespace-nowrap text-sm font-medium text-gray-700 hover:text-[#f43397]">Fragrance</Link>
      </div>
    </div>
  </div>

  {/* Mobile Menu */}
  {isMenuOpen && (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={closeMenu}></div>
      <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 p-4">
        <div className="flex flex-col space-y-4">
          <div className="group">
            <button className="flex items-center justify-between w-full py-2 text-gray-700">
              <span>Shop</span>
              <IoIosArrowDown />
            </button>
            <div className="hidden group-hover:block pl-4">
              <Link to="#" className="block py-2 text-gray-700 hover:text-[#f43397]">Makeup</Link>
              <Link to="#" className="block py-2 text-gray-700 hover:text-[#f43397]">Skincare</Link>
              <Link to="#" className="block py-2 text-gray-700 hover:text-[#f43397]">Haircare</Link>
            </div>
          </div>
          <Link to="#" className="py-2 text-gray-700 hover:text-[#f43397]">Brands</Link>
          <Link to="#" className="py-2 text-gray-700 hover:text-[#f43397]">Offers</Link>
          <Link to="#" className="py-2 text-gray-700 hover:text-[#f43397]">Beauty Advice</Link>
          <Link to="/" className="py-2 text-gray-700 hover:text-[#f43397]">Home</Link>
          <Link to="/cart" className="py-2 text-gray-700 hover:text-[#f43397]">
            Cart {cardItem.length > 0 && `(${cardItem.length})`}
          </Link>
        </div>
      </div>
    </>
  )}
</header>
    </>
  );
};

export default Navbar;