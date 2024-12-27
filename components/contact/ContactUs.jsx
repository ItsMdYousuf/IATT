"use client";
import ContactImg from "@/assets/contact_us.png";
import Image from "next/image";
import { LuContactRound } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import Button from "../Button";
import style from "./contact.module.css";
const ContactUs = () => {
  return (
    <section className="h-screen bg-gradient-to-b from-slate-700 to-slate-600 p-10">
      <div className="text-center">
        <h2 className="font-jost text-[2rem] font-bold text-white">
          Contact Us
        </h2>
        <p>
          <span className="font-jost text-blue-500">Let’s</span>{" "}
          <span className="font-caveat text-xl font-semibold text-white">
            Talk About Ideas
          </span>
        </p>
      </div>
      {/* container */}
      <div>
        <div className="mx-auto grid w-3/4 grid-cols-2 items-center gap-5">
          {/* item one */}
          <div className="flex flex-col gap-5">
            {/* icon */}
            <div className="flex gap-10">
              <div className="relative inline-block">
                <span className="flex size-10 items-center justify-center rounded-full border-[1px] bg-black text-xl text-white">
                  <MdOutlineEmail />
                </span>
                <span className={style.icon__underline}></span>
              </div>
              <div className="mt-2 text-white">
                <h5 className="font-caveat text-2xl font-bold">Email</h5>
                <p>yousuf.okay@gmail.com</p>
                <p>yousuf@vercel.com</p>
              </div>
            </div>
            <div className="flex gap-10">
              <div className="relative inline-block">
                <span className="flex size-10 items-center justify-center rounded-full border-[1px] bg-black text-xl text-white">
                  <LuContactRound />
                </span>
                <span className={style.icon__underline}></span>
              </div>

              <div className="mt-2">
                <h5 className="font-caveat text-2xl font-bold text-white">
                  Fill our contact form
                </h5>
                <Button
                  children="Contact"
                  className="mt-5 border-2 bg-transparent"
                />
              </div>
            </div>
          </div>
          {/* item two */}
          <div className="">
            <Image width={500} height={500} src={ContactImg} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
