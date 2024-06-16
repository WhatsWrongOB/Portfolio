import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import PortfolioCard from "./PortfolioCard";
import { useGetProjectQuery } from "../redux/api";

const Portfolio = () => {
  const { data, isLoading, isError } = useGetProjectQuery();

  return (
    <section id="portfolio">
      <h2 className="portfolio_heading">My Portfolio</h2>
      <div className="portfolio_container">
        {isLoading ? (
          <ClipLoader loading={isLoading} size={20} color="white" />
        ) : isError ? (
          <div>Error loading projects.</div>
        ) : data && data.length > 0 ? (
          data.map((project) => (
            <PortfolioCard key={project._id} project={project} />
          ))
        ) : (
          <div>No projects available.</div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
