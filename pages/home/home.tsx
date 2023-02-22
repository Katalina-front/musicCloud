import { NextPage } from "next";
import React from "react";
import Genres from "../../src/components/genre/genre";
import { SPopularTraksWrapper, SWrapper } from "./home.styles";

const Home: NextPage = () => {
  return (
    <>
      <SPopularTraksWrapper>
        <h2>Добро пожаловать на Music Wave!</h2>
        <p>
          Музыкальная платформа, созданная в некоммерческих целях. <br />
          Приложение разработано в рамках моего портфолио frontend-разработчика{" "}
          <br />
          Здесь, я хочу показать свои навыки в верстке, интеграции с API, <br />
          работу поисковой строки, а так же возможность воспроизведения
          потоковой музыки.
        </p>
        <em>
          в проекте использовано API -{" "}
          <a href="https://www.jamendo.com/start">Jamendo</a>
        </em>
      </SPopularTraksWrapper>
      <SWrapper>
        <div className="traks">
          <p className="title">ТЕГИ</p>
          <Genres />
        </div>
        <div className="traks">Треки недели</div>
        <div className="traks">Исполинели</div>
      </SWrapper>
    </>
  );
};

export default Home;
