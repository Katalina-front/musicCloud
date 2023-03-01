import styled from "styled-components";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import PauseCircleFilledRoundedIcon from "@mui/icons-material/PauseCircleFilledRounded";


export const SHitsWrapper = styled.div`
  overflow: scroll;
  height: 100%;

  ::-webkit-scrollbar {
    width: 0;
    background-color: transparent;
  }
`;

export const SHitCell = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  margin-bottom: 5px;
  color: #d7d7d7;
  text-decoration: none;
`;

export const SPlayIcon = styled(PlayCircleOutlineRoundedIcon)`
  float: right;
`;

export const SPauseIcon = styled(PauseCircleFilledRoundedIcon)`
  float: right;
  display: none;
`;


