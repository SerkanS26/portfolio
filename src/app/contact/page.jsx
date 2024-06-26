"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Contact Me!";

  const form = useRef();

  // SEND EMAIL
  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAIL_SERVICE_KEY,
        }
      )
      .then(
        (result) => {
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div className="text-gray-400">
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>
        {/* FORM CONTAINER */}

        {/* <form
          onSubmit={sendEmail}
          ref={form}
          className="h-1/2 lg:h-full lg:w-1/2  bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24 xs:bg-green-100 xs:h-full xs:w-full xs:p-8 sm:bg-blue-100 sm:h-full sm:w-full sm:p-8 md:bg-yellow-100 md:h-full md:w-full md:p-8 lg:bg-red-100 lg:h-full lg:w-full lg:p-8 xl:bg-purple-100 xl:h-full xl:w-full xl:p-8"
        > */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-1/2 lg:h-full lg:w-1/2  bg-gray-100 rounded-xl text-xl flex flex-col gap-8 justify-center p-24  xs:h-full xs:w-full xs:p-8 "
        >
          <span className="">Dear Serkan Safran,</span>
          <textarea
            name="user_message"
            rows={6}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none lg:w-full sm:py-7 xs:py-7"
          />

          <span>My mail address is:</span>
          <input
            name="user_email"
            type="text"
            className="bg-transparent border-b-2 border-b-black outline-none "
          />
          <span>Regards</span>
          <button className="bg-gray-300  hover:bg-gray-200 rounded font-semibold text-gray-600 p-4">
            Send
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong. Please try again.
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
