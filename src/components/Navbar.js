"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import asterisk from "../../public/assets/asterisk.svg";
import AeroNexIcon from "../../public/assets/AeroNexIcon.svg";
import HamburgerIcon from "../../public/assets/HamburgerIcon.svg";
import ChevronIcon from "../../public/assets/IconChevronRight.svg";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="fixed w-full h-[70px] xl:h-[89px] bg-white xl:px-16 xxl:px-24 justify-between items-center inline-flex z-50 ">
      <div className="items-center flex ml-2 xl:mr-3">
        <Image src={AeroNexIcon} />
        <h1 className="text-blue-800 text-[32px] font-bold">Aero</h1>
        <h1 className="text-blue-400 text-[32px] font-bold">Nex</h1>
      </div>
      <div className="hidden xl:flex h-full ">
        <ul className="flex">
          <li className=" h-full flex items-center relative nav-underline">
            <Link
              href="/nosotros"
              className={`hover:text-aeronex ${
                activeLink === "/nosotros" ? "text-aeronex" : "text-black"
              }`}
            >
              Nosotros
            </Link>
          </li>
          <li className=" h-full flex items-center ml-5 relative nav-underline">
            <Link
              href="/novedades"
              className={`hover:text-aeronex ${
                activeLink === "/novedades" ? "text-aeronex" : "text-black"
              }`}
            >
              Novedades
            </Link>
          </li>
          <li className=" h-full flex items-center ml-5 relative nav-underline">
            <Link
              href="/inversores"
              className={`hover:text-aeronex ${
                activeLink === "/inversores" ? "text-aeronex" : "text-black"
              }`}
            >
              Inversores
            </Link>
          </li>
          <li className=" h-full flex items-center ml-5 relative nav-underline">
            <Link
              href="/sumate-al-equipo"
              className={`hover:text-aeronex ${
                activeLink === "sumate-al-equipo"
                  ? "text-aeronex"
                  : "text-black"
              }`}
            >
              Sumate al equipo
            </Link>
          </li>
          <li className=" h-full flex items-center ml-5 relative nav-underline">
            <Link
              href="/productos-y-servicios"
              className={`hover:text-aeronex ${
                activeLink === "/productos-y-servicios"
                  ? "text-aeronex"
                  : "text-black"
              }`}
            >
              Productos y Servicios
            </Link>
          </li>
          <li className=" h-full flex items-center ml-5 relative nav-underline">
            <Link
              href="/proovedores"
              className={`hover:text-aeronex ${
                activeLink === "/proovedores" ? "text-aeronex" : "text-black"
              }`}
            >
              Proovedores
            </Link>
          </li>
        </ul>
        <div className="flex ml-6">
          <div className="flex justify-center items-center border-l border-gray-300 p-4">
            <button>
              <Image src={asterisk} />
            </button>
          </div>
          <div className=" flex justify-center items-center border-l border-gray-300 p-4">
            <h2>ES</h2>
          </div>
          <div className="flex justify-center items-center border-x border-gray-300 p-4">
            <h2>Sitios</h2>
          </div>
        </div>
      </div>
      {/*Mobile*/}
      <div className="xl:hidden flex items-center h-full border-l border-gray-300 mr-5 pl-5">
        <button onClick={toggleMenu}>
          <Image src={HamburgerIcon} />
        </button>
      </div>
      {/* Dropdown content */}
      <div className={`dropdown-menu ${isOpen ? "open" : ""}`}>
        <ul className="flex flex-col">
          <Link
            href="/nosotros"
            className="flex items-center justify-between mx-4 py-6 border-b border-gray-300"
          >
            Nosotros
            <Image src={ChevronIcon} />
          </Link>
          <Link
            href="/novedades"
            className="flex items-center justify-between mx-4 py-6 border-b border-gray-300"
          >
            Novedades
            <Image src={ChevronIcon} />
          </Link>
          <Link
            href="/inversores"
            className="flex items-center justify-between mx-4 py-6 border-b border-gray-300"
          >
            Inversores
            <Image src={ChevronIcon} />
          </Link>
          <Link
            href="/sumate-al-equipo"
            className="flex items-center justify-between mx-4 py-6 border-b border-gray-300"
          >
            Sumate al equipo
            <Image src={ChevronIcon} />
          </Link>
          <Link
            href="/productos-y-servicios"
            className="flex items-center justify-between mx-4 py-6 border-b border-gray-300"
          >
            Productos y Servicios
            <Image src={ChevronIcon} />
          </Link>
          <Link
            href="/proovedores"
            className="flex items-center justify-between mx-4 py-6 border-b border-gray-300"
          >
            Proovedores
            <Image src={ChevronIcon} />
          </Link>
          <Link
            href="/asterisco"
            className="flex items-center justify-between mx-4 py-6 border-b border-gray-300"
          >
            Asterisco
            <Image src={ChevronIcon} />
          </Link>
          <Link
            href="/español"
            className="flex items-center justify-between mx-4 py-6 border-b border-gray-300"
          >
            Español
            <Image src={ChevronIcon} />
          </Link>
          <Link
            href="/sitios"
            className="flex items-center justify-between mx-4 py-6 "
          >
            Sitios
            <Image src={ChevronIcon} />
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
