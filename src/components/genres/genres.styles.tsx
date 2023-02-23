import styled from "styled-components";

export const SGenresWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const SGenresCell = styled.a`
  height: 100%;
  width: fit-content;
  border: 2px solid #4744e1;
  border-radius: 10px;
  background: transparent;
  margin: 3px;
  outline: none;
  text-decoration: none;

  :hover {
    border: 2px solid #e14470;
    -webkit-box-shadow: 3px 1px 10px 2px rgba(225, 68, 112, 0.2);
    -moz-box-shadow: 3px 1px 10px 2px rgba(225, 68, 112, 0.2);
    box-shadow: 3px 1px 10px 2px rgba(225, 68, 112, 0.2);
  }

  p {
    font-size: 14px;
    color: #d7d7d7;
    margin: 0;
    padding: 5px;
  }
`;
