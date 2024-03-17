"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import items from "../projects";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  // router
  const router = useRouter();

  const buttonHandler = () => {
    router.push("/contact", { scroll: false });
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)]  flex items-center justify-center text-8xl text-center ">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className=" h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className=" flex flex-col gap-8 text-white lg:h-[95%]">
                  <h1 className="  text-xl font-bold md:text-4xl lg:text-6xl xl:text-7xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image
                      className="object-cover"
                      src={item.img}
                      alt={item.title}
                      fill="responsive"
                    />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] xl:w-[600px] lg:text-lg ">
                    {item.desc}
                  </p>
                  {/* buttons */}
                  <div className=" flex justify-end">
                    <Link href={item.github} target="blank" className="">
                      {" "}
                      <button className="flex justify-center items-center gap-2 p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">
                        <Image
                          src="/github.png"
                          width={24}
                          height={24}
                          alt="github"
                        />
                        github
                      </button>
                    </Link>
                    <Link href={item.link} target="blank" className="">
                      {" "}
                      <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">
                        See Demo
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>{" "}
      </div>{" "}
      <div className="w-screen h-screen flex flex-col gap-16 justify-center items-center text-center">
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] rounded-full cursor-pointer"
            onClick={buttonHandler}
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Junior Full-Stack Developer
              </textPath>
            </text>
          </motion.svg>

          {/* <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 bottom-0 left-0 right-0  m-auto bg-black text-blue-50  rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link> */}

          <button
            onClick={buttonHandler}
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 bottom-0 left-0 right-0  m-auto  bg-black text-blue-50  rounded-full flex items-center justify-center"
          >
            Hire Me
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
