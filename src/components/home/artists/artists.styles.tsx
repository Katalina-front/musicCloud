import styled from "styled-components";

export const SArtistsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: stretch;
  height: 100%;
  overflow: scroll;
  height: 100%;

  ::-webkit-scrollbar {
    width: 0;
    background-color: transparent;
  }
`;

export const SArtistsCell = styled.a`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  text-decoration: none;
  color: #d7d7d7;
  width: 100px;
  height: 100px;
  img {
    width: 70px;
    height: 70px;
    border: 2px solid #4744e1;
    border-radius: 10px;
    background: linear-gradient(#a55eea, #e14470);
    background-image: url(https://img.icons8.com/nolan/2x/music-record.png); //NOTE: исправить на внутреннюю ссылку
    background-size: 70px 70px;
    background-position: center;
    background-repeat: no-repeat;
    text-indent: -10000px;

    :hover {
      border: 2px solid #e14470;
      -webkit-box-shadow: 3px 1px 10px 2px rgba(225, 68, 112, 0.2);
      -moz-box-shadow: 3px 1px 10px 2px rgba(225, 68, 112, 0.2);
      box-shadow: 3px 1px 10px 2px rgba(225, 68, 112, 0.2);
    }
  }

  p {
    margin: 5px 0 0 0;
    font-size: 12px;
    text-align: center;
  }
`;
