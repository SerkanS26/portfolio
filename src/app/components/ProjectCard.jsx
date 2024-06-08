"use client";

import { TbWorldWww } from "react-icons/tb";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 1 }}
      key={project.id}
    >
      <div className="bg-white rounded-xl shadow-md relative flex flex-col md:flex-row">
        <Image
          src={project.img}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="object-cover rounded-t-xl md:rounded-tr-none md:rounded-l-xl w-full md:w-2/5"
          priority={true}
        />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-4">{project.title}</h3>

          <div className="flex justify-center gap-4 text-gray-500 mb-4">
            {project.desc}
          </div>

          <div className="border border-gray-200 mb-5"></div>

          <div className="flex flex-col lg:flex-row justify-between ">
            <Link
              href={project.github}
              target="blank"
              className="h-[36px] flex gap-2 justify-center items-center bg-gray-100 hover:bg-primary text-black px-4 py-2 ml-2 rounded-lg text-center text-sm"
            >
              <Image src="/github.png" width={24} height={24} alt="github" />
              Github
            </Link>

            <Link
              href={project.link}
              target="blank"
              className="h-[36px] flex gap-2 justify-center items-center  bg-gray-100 hover:bg-primary text-black px-4 py-2 ml-2 rounded-lg text-center text-sm"
            >
              <TbWorldWww className="text-xl" />
              Demo
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
