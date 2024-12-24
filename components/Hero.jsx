"use client";
import socialPic from "@/assets/socials.png";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaArrowTrendUp, FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="mx-auto grid grid-cols-2 items-center gap-5 bg-gradient-to-b from-slate-700 to-slate-600 px-10 text-white">
      {/* Contents */}
      <div>
        <p className="text-sm font-semibold uppercase">
          Hello world, <span className="text-cyan-500">we are</span>
        </p>
        <h1 className="py-5 text-[3rem] font-bold text-violet-400">
          IT Agency Tiger Team
        </h1>
        <p className="flex items-center gap-2 font-caveat text-2xl font-semibold">
          <span>
            <FaArrowTrendUp />
          </span>{" "}
          a Content Marketing Agency
        </p>
        <br />
        <p className="mt-5 text-slate-300">
          We are a team of enthusiastic individuals who help brands grow by
          unleashing the potential of social media
        </p>
        {/* socials */}
        <div className="my-5 flex items-center gap-5 text-xl text-white">
          <IoLogoInstagram className="cursor-pointer" />
          <FaLinkedin className="cursor-pointer" />
          <FaXTwitter className="cursor-pointer" />
        </div>
        {/* buttons and link */}
        <div className="flex items-center gap-5">
          <Button children="CONTACT US" />
          <a href="/" className="uppercase">
            download brochure
          </a>
        </div>
      </div>
      {/* Image */}
      <div className="my-10 flex items-center justify-center">
        <Image
          className="size-96 rounded-full bg-cyan-400"
          width={500}
          height={500}
          alt="Social Pic"
          src={socialPic}
        />
      </div>
    </section>
  );
};

export default Hero;
