"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col px-4  sm:px-8 md:px-12 lg:px-20 lg:flex-row xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 relative lg:h-full lg:w-1/2">
          <Image
            src="/profile.jpg"
            alt="profile image"
            className="object-cover px-5 py-2 rounded-br-[100px] rounded-tl-[100px] "
            fill
          />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 flex flex-col gap-8 items-center justify-center lg:h-full lg:w-1/2 px-10">
          {/* TITLE */}
          <h1 className="text-4xl font-bold md:text-6xl">
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500">
              Serkan
            </span>
            .
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
            A web developer with a focus on the MERN stack, but still exploring
            other technologies and frameworks that catch my interest! if
            you&apos;re looking for a developer to add to your team, I&apos;d
            love to hear from you!
          </p>
          {/*BUTTONS*/}
          <div className="flex gap-4 w-full ">
            <Link href="/portfolio">
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
                View My Work
              </button>
            </Link>
            <Link href="/contact">
              <button className="p-4 rounded-lg ring-1 ring-black">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
