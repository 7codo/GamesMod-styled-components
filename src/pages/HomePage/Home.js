import React from "react";
import GamesGalery from "../../components/GamesGalery/GamesGalery";
import OnSaleGalery from "../../components/OnSaleGalery/OnSaleGalery";

import { MainHomeContainer } from "./Home.elements";

const Home = () => {
  return (
    <MainHomeContainer>
      <GamesGalery />
      <OnSaleGalery />
    </MainHomeContainer>
  );
};

export default Home;
