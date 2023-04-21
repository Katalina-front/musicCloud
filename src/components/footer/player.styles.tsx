import styled from "styled-components";

export const SMusicPlayer = styled.div`
  width: 100%;
  height: 70px;
  position: fixed;
  bottom: 0;
  align-items: center;
  z-index: 10000;
  background-color: #121212;
  -webkit-box-shadow: 0px -5px 19px 1px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 0px -5px 19px 1px rgba(0, 0, 0, 0.6);
  box-shadow: 0px -5px 19px 1px rgba(0, 0, 0, 0.6);
`;

export const SMusicTrack = styled.div`
  width: 100%;
  height: 10px;
  background-color: #2b2b2b;

  :hover {
    background-color: #6b6b6bcf;
  }
`;

export const SToolbar = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px 5px 15px;
`;

export const SCover = styled.div`
  width: 40px;
  height: 40px;
  border: 2px solid #959595b5;
  border-radius: 4px;
  margin: 5px;
`;

export const SButtons = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  width: 90%;

  svg {
    margin: 0 5px 0 5px;
    color: #959595b5;

    :hover {
      color: #ffffff;
    }
  }
`;
