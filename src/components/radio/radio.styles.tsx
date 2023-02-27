import styled from "styled-components";

export const SCarousel = styled.div`
  font-family: sans-serif;
  text-align: center;
  max-width: 98%;
  margin: 0 auto;
`;

export const SScrollableContainer = styled.div`
  position: relative;

  .list {
    display: flex;
    overflow-x: auto;
    list-style: none;
    padding: 0;
    margin: 0;

    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const SCell = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  width: fit-content;
  margin-right: 5px;

  .item {
    display: flex;
    width: 160px;
    height: 110px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;

    img {
      border-radius: 10px;
      border: 2px solid #e14470;
      -webkit-box-shadow: 0px -1px 19px 0px rgba(241, 59, 129, 0.2);
      -moz-box-shadow: 0px -1px 19px 0px rgba(241, 59, 129, 0.2);
      box-shadow: 0px -1px 19px 0px rgba(241, 59, 129, 0.2);
    }
  }

  p {
    font-size: 14px;
  }
`;
