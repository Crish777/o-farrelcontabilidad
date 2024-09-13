"use client";
type Props = {};

import { Menu, X } from "lucide-react";
import { useState } from "react";
import MenuMobile from "../menu-mobile";

const itemsMenu = [
  { name: "Home", href: "home" },
  { name: "About us", href: "about" },
  { name: "Services", href: "services" },
  { name: "Our Team", href: "team" },
  { name: "Contact", href: "contact" },
];

const Header = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <>
      <header className='bg-white py-4 px-6 flex justify-between items-center sticky top-0 left-0 z-10 shadow-md'>
        <div className='flex items-center'>
          <span
            onClick={() => {
              setIsMenuOpen(false);
            }}
            className='text-[#3B82F6] font-bold text-2xl'>
            O&apos;Farrel
          </span>
        </div>
        <nav className='hidden md:flex space-x-10'>
          {itemsMenu.map((item) => (
            <a
              key={item.name}
              href={`#${item.href}`}
              className='text-[#3B82F6] font-medium'
              onClick={() => {
                setIsMenuOpen(false);
              }}>
              {item.name}
            </a>
          ))}
        </nav>
        <button className='md:hidden'>
          {isMenuOpen ? (
            <X
              size={24}
              onClick={() => {
                setIsMenuOpen(false);
              }}
            />
          ) : (
            <Menu
              size={24}
              onClick={() => {
                setIsMenuOpen(true);
              }}
            />
          )}
        </button>
      </header>
      {isMenuOpen ? <MenuMobile itemsMenu={itemsMenu} setIsMenuOpen={setIsMenuOpen} /> : ""}
    </>
  );
};

export default Header;
