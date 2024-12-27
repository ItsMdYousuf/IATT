import { FaQuoteLeft } from "react-icons/fa";

const TestimonialCard = ({ desc, clientName, roll, img }) => {
  return (
    <div className="inline-block select-none rounded-lg bg-black p-7 shadow-lg">
      <div className="relative">
        <img
          className="size-36 rounded-full object-cover"
          src={img}
          alt="profile"
        />
        <FaQuoteLeft className="absolute left-0 top-2 text-2xl text-white" />
        {/* decs */}
        <p className="my-4 text-slate-300">{desc}</p>
        <div className="text-white">
          <h2 className="text-lg font-semibold">{clientName}</h2>
          <p className="text-xs text-slate-400">{roll}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
