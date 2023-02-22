import styled from "styled-components";

export const SPopularTraksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;
  text-align: center;
  border-radius: 10px;
  border: 2px solid #e14470;
  padding: 10px;
  margin-bottom: 20px;
  color: #d7d7d7;
  -webkit-box-shadow: 3px 1px 10px 2px rgba(225, 68, 112, 0.2);
  -moz-box-shadow: 3px 1px 10px 2px rgba(225, 68, 112, 0.2);
  box-shadow: 3px 1px 10px 2px rgba(225, 68, 112, 0.2);

  a {
    outline: none;
    text-decoration: none;
    padding: 2px 1px 0;
    color: #d7d7d7;
  }

  a:focus,
  a:hover {
    color: #e14470;
    border-bottom: 1px solid;
  }

  a:active {
    color: #e14470;
  }

  ${({ theme }) => theme.breakpoints.down("xs")} {
    background-color: #ff0000;
  }
`;

export const SWrapper = styled.div`
  display: flex;

  .traks {
    width: 100%;
    height: 180px auto;
    border-radius: 10px;
    border: 2px solid #e14470;
    padding: 10px;

    :nth-child(1) {
      margin-right: 10px;
    }

    :nth-child(2) {
      margin-right: 10px;
    }
  }

  .title {
    margin: 0 0 10px 0;
    padding-left: 5px;
    text-align: center;
  }
`;
