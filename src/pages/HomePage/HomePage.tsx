import React from "react";
import { generateBEMClassName } from "bem-classnames-generator/dist";
import Trending from "../../components/Trending/Trending.tsx";
import Recommended from "../../components/Recommended/Recommended.tsx";

interface IHomePage {}

const HomePage: React.FC<IHomePage> = () => {
  const BEMBlock = "home-page";

  return (
    <div className={generateBEMClassName({ block: BEMBlock })}>
      <Trending />
      <Recommended />
    </div>
  );
};

export default HomePage;
