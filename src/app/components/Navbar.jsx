"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./NavLink";

import { motion } from "framer-motion";

// url and title for the links
const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255, 255, 255)",
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
      rotate: 45,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255, 255, 255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listitemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 text-xl sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* NAVIGATION LINKS */}
      <div className="hidden gap-4 w-1/3 md:flex">
        {links.map((link) => (
          <NavLink key={link.title} link={link} />
        ))}
      </div>
      {/* LOGO */}
      <div className=" w-1/3 sm:justify-center md:hidden lg:flex xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">Serkan</span>
          <span className="w-16 h-8 rounded bg-white text-black flex items-center justify-center">
            SAFRAN
          </span>
        </Link>
      </div>
      {/* SOCIAL LINKS */}
      <div className="hidden md:flex gap-4 w-1/3 md:justify-center">
        <Link href="https://github.com/SerkanS26" target="blank">
          <Image src="/github.png" width={24} height={24} alt="github" />
        </Link>
        <Link
          href="https://linkedin.com/in/serkan-safran-82aa821ab"
          target="blank"
        >
          <Image src="/linkedin.png" width={24} height={24} alt="linkedin" />
        </Link>
      </div>
      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="w-10 h-8 flex flex-col justify-between relative z-50"
        >
          <motion.div
            variants={topVariants}
            className="w-10 h-1 bg-black rounded origin-left"
            animate={menuOpen ? "opened" : "closed"}
          ></motion.div>
          <motion.div
            variants={centerVariants}
            className="w-10 h-1 bg-black rounded"
            animate={menuOpen ? "opened" : "closed"}
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            className="w-10 h-1 bg-black rounded origin-left"
            animate={menuOpen ? "opened" : "closed"}
          ></motion.div>
        </button>
        {/* MENU LIST */}
        {menuOpen && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {links.map((link) => (
              <motion.div variants={listitemVariants} key={link.title}>
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
