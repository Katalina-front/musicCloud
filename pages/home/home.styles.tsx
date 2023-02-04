import styled from "styled-components";

export const SPopularTraksWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  border-radius: 10px;
  border: 2px solid #e14470;
  padding: 10px;
  margin-bottom: 20px;
`;

export const SWrapper = styled.div`
  display: flex;

  .traks {
    width: 100%;
    height: 100px;
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
`;
