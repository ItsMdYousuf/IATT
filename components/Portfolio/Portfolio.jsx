import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {
  return (
    <section className="bg-gradient-to-b from-slate-700 to-slate-600 p-10">
      <h2 className="text-center font-jost text-[2rem] font-bold text-white">
        PORTFOLIO
      </h2>
      {/* portfolio cards */}
      <div className="mx-20 mt-10 grid grid-cols-3 gap-10">
        {/* single card */}
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
      </div>
    </section>
  );
};

export default Portfolio;
