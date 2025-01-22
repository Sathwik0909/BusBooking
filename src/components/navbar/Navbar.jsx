import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", link: "/" },
    { label: "Services", link: "/services" },
    { label: "Tickets", link: "/tickets" },
    { label: "About", link: "/about" },
  ];

  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handlePosition = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > scrollPosition && currentScrollPos > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setScrollPosition(currentScrollPos);
    };

    window.addEventListener("scroll", handlePosition);

    return () => {
      window.removeEventListener("scroll", handlePosition);
    };
  }, [scrollPosition]);

  return (
    <nav
      className={`w-full h-[8ch] top-0 fixed left-0 lg:px-24 md:px-16 sm:px-7 backdrop-blur-lg transition-transform duration-300 z-50 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${scrollPosition > 50 ? "bg-violet shadow-md" : "bg-neutral-100/10"}`}
    >
      <div className="flex items-center justify-between w-full h-full">
        <Link to="/" className="text-4xl text-red-500 font-bold">
          Bus
        </Link>

        {/* Hamburger icon */}
        <div
          className="w-fit md:hidden flex items-end justify-center cursor-pointer flex-col gap-1 absolute top-10 right-5 text-neutral-700"
          onClick={handleOpen}
        >
          {open ? (
            <FaTimes className="text-2xl" />
          ) : (
            <FaBars className="text-2xl" />
          )}
        </div>

        {/* Navigation links */}
        <div
          className={`${
            open
              ? "flex absolute top-20 left-0 w-full h-auto md:relative"
              : "hidden"
          } flex-1 md:flex flex-col md:flex-row md:gap-14 gap-8 md:items-center md:p-0 sm:p-4 p-4 justify-end sm:items-start md:bg-transparent border md:border-transparent border-neutral-200 bg-neutral-50 md:shadow-none sm:shadow-md shadow-md rounded-xl`}
        >
          <ul className="list-none flex md:items-center items-start flex-wrap md:flex-row flex-col md:gap-8 gap-4 text-lg text-neutral-500 font-normal">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <Link
                  to={item.link}
                  className="hover:text-red-500 ease-in-out duration-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center">
            <button className="md:px-4 px-6 md:py-1 py-2 bg-red-500 hover:bg-transparent border border-red-500 hover:border-red-500 text-neutral-50 hover:text-red-500 md:rounded-md rounded-lg text-base ease-in-out duration-300">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
