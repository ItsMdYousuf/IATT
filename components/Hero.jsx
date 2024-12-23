import socialPic from "@/assets/socials.png";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaArrowTrendUp, FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import Button from "./Button";


const Hero = () => {
  return (
     <section className="grid grid-cols-2 items-center text-white bg-gradient-to-b from-slate-700 to-slate-600 px-10 mx-auto gap-5">
      {/* Contents */}
        <div>
           <p className="text-sm font-semibold uppercase">Hello world, <span className="text-cyan-500">we are</span></p>
           <h1 className="text-[3rem] py-5 text-violet-400 font-bold">IT Agency Tiger Team</h1>
           <p className="flex items-center gap-2 font-caveat text-2xl font-semibold">
              <span><FaArrowTrendUp /></span> a Content Marketing Agency</p>
           <br />
           <p className="text-slate-300 mt-5">We are a team of enthusiastic individuals who help brands grow by unleashing the potential of social media</p>
           {/* socials */}
           <div className="flex my-5 text-xl text-white gap-5 items-center">
              <IoLogoInstagram className="cursor-pointer"/>
              <FaLinkedin className="cursor-pointer"/>
              <FaXTwitter className="cursor-pointer"/>
           </div>
           {/* buttons and link */}
           <div className="flex gap-5 items-center">
              <Button children="CONTACT US" />
              <a href="/" className="uppercase">download brochure</a>
           </div>
        </div>
        {/* Image */}
        <div className="flex my-10 justify-center items-center   bg-cyan-400 rounded-full">
           <Image className=" " width={500} height={500} alt="Social Pic" src={socialPic} />
        </div>
    </section>
  )
}

export default Hero;