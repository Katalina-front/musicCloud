import styled from "styled-components";

export const SArtistsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const SArtistsCell = styled.a`
  text-decoration: none;
  color: #d7d7d7;
  img {
    width: 70px;
    height: 70px;
    border: 2px solid #4744e1;
    border-radius: 10px;

    :hover {
      border: 2px solid #e14470;
      -webkit-box-shadow: 3px 1px 10px 2px rgba(225, 68, 112, 0.2);
      -moz-box-shadow: 3px 1px 10px 2px rgba(225, 68, 112, 0.2);
      box-shadow: 3px 1px 10px 2px rgba(225, 68, 112, 0.2);
    }
  }

  p {
    margin: 0;
    font-size: 12px;
    text-align: center;
  }
`;
