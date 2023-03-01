import { NextPage } from "next";
import React from "react";
import { STitle } from "./artists.styles";

const Artists: NextPage = () => {
  return (
    <div className="center">
      <STitle>Исполнители</STitle>
      <h5>здесь собраны лучшие треки</h5>
    </div>
  );
};

export default Artists;
