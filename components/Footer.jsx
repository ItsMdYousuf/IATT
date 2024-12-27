import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-slate-900 p-10">
      <div className="grid grid-cols-3">
        <div className="col-span-1">
          <div className="flex items-center justify-center gap-2 text-xl text-white">
            <FaLinkedin />
            <FaXTwitter />
            <IoLogoInstagram />
          </div>
        </div>
        <div className="col-span-1 flex flex-col items-center justify-center text-white">
          <p className="font-semibold">
            &#169; 2025{" "}
            <span className="font-jost text-purple-500">
              IT AGENCY TIGER TEAM
            </span>
          </p>
          <p>All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
