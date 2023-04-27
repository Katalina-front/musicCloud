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
  display: flex;
  width: 70%;
  height: 40px;
  border-radius: 4px;
  margin: 5px;

  .inform {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    font-size: 12px;
    color: white;
  }
`;

export const SButtonPlay = styled.div`
  background-color: transparent;
  margin-right: 30px;
`;

export const SButtonVolume = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
`;

export const SButtonSocial = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100px;
`;
