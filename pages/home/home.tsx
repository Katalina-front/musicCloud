import { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
  return (
    <>
      <div className="center">
        <div>Добро пожаловать!</div>
        <h5>здесь собраны лучшие треки</h5>
      </div>
      <style jsx>{`
        .center {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  );
};

export default Home;
