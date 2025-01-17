"use client";

import React from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative scroll-margin flex bg-radial-gradient snap-center"
    >
      <motion.div
        className="absolute -top-[80px] right-36 max-xs:-right-44"
        initial={{ opacity: 0, translateY: -50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 0.4,
        }}
      >
        <Image alt="tree" src={"/three.webp"} width={380} height={380} />
      </motion.div>

      <motion.div
        className="flex flex-col space-y-10 px-28 max-sm:px-10 h-[calc(100vh-80px)] justify-center"
        initial={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 0.4,
        }}
      >
        <div className="relative space-y-7 flex  flex-col mt-10">
          <div>
            <p className="text-md">Data Science Club</p>
            <h1 className="text-[85px] leading-none max-sm-xs:text-7xl max-xs:text-5xl font-extrabold bg-gradient-to-b from-gradient-first via-gradient-second to-gradient-third bg-clip-text text-transparent">
              Welcomes You
            </h1>
          </div>
          <div className="space-y-2">
            <p className="font-bold text-md">Who We Are</p>
            <p className="ml-5 md-xs:w-[610px] text-justify font-light text-lg">
              Welcome to the Data Science Club, where curiosity meets
              innovation! Whether you're a beginner eager to dive into data or a
              seasoned pro ready to tackle complex challenges, our club is your
              go-to community. We foster a collaborative environment where
              learning is hands-on, and ideas flourish. Join us for our
              thrilling club events and let's revel in the passion of our
              incredible community!
            </p>
            <br></br>
            <p className="ml-5 md-xs:w-[610px] text-justify font-light text-lg">
              "Data is a precious thing and will last longer than the systems
              themselves." –Tim Berners Lee
            </p>
          </div>
          {/* <div className="max-xs:flex justify-center">
            <Button className="px-10">Explore</Button>
            <Button variant={"ghost"}>Fun Time</Button>
          </div> */}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
