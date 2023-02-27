import styled from "styled-components";

export const SCarousel = styled.div`
  .gallery-cell {
    width: 66%;
    height: 200px;
    margin-right: 10px;
    background: #8c8;
    counter-increment: gallery-cell;
  }

  .gallery-cell:before {
    display: block;
    text-align: center;
    content: counter(gallery-cell);
    line-height: 200px;
    font-size: 80px;
    color: white;
  }
`;
