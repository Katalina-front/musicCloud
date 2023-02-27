import { NextPage } from "next";
import React from "react";
import { Artists, Genres, Hits, Radio } from "../../src/components";
import { SPopularTraksWrapper, SRadio, SWrapper } from "./home.styles";

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
        <div className="traks">
          <p className="title">ТОП - ХИТОВ</p>
          <Hits />
        </div>
        <div className="traks">
          <p className="title">ТОП - ИСПОЛНИТЕЛЕЙ</p>
          <Artists />
        </div>
      </SWrapper>
      <SRadio>
        <div className="title">Радио</div>
        <Radio />
      </SRadio>
    </>
  );
};

export default Home;
