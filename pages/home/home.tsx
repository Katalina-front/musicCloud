import { NextPage } from "next";
import React from "react";
import { SPopularTraksWrapper, SWrapper } from "./home.styles";

const Home: NextPage = () => {
  return (
    <>
      <SPopularTraksWrapper>Популярные треки</SPopularTraksWrapper>
      <SWrapper>
        <div className="traks">Жанры</div>
        <div className="traks">Треки недели</div>
        <div className="traks">Исполинели</div>
      </SWrapper>
    </>
  );
};

export default Home;
