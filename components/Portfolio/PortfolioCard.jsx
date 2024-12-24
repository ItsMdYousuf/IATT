import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import webImg from "./code.jpg";
const PortfolioCard = () => {
  return (
    <div className="rounded-2xl bg-slate-900 p-5">
      {/* img */}
      <div className="mb-5 rounded-lg">
        <Image
          width={300}
          height={200}
          className="cover rounded-2xl shadow-md"
          src={webImg}
          alt=""
        />
      </div>
      {/* contents */}
      <div className="text-white">
        <p className="text-xs">WEB DEVELOPER</p>
        <h2 className="text-xl font-semibold">Build a modern web</h2>
        <p className="py-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo fuga
          libero dolore, repellat iste soluta minus?
        </p>
        <div>
          <a className="flex items-center gap-3 text-sm" href="/">
            See Project
            <span>
              <FaArrowRight className="text-purple-600" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
