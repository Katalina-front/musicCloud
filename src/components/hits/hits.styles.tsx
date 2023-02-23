import styled from "styled-components";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import PauseCircleOutlinedIcon from "@mui/icons-material/PauseCircleOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";

export const SHitsWrapper = styled.div``;

export const SHitCell = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  margin-bottom: 10px;
  color: #d7d7d7;
  text-decoration: none;

  button {
    background-color: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
  }
`;

export const SPlayCircleOutlineOutlinedIcon = styled(
  PlayCircleOutlineOutlinedIcon
)`
  float: right;
`;

export const SPauseCircleOutlinedIcon = styled(PauseCircleOutlinedIcon)`
  float: right;
  display: none;
`;

export const SFavoriteBorderOutlinedIcon = styled(FavoriteBorderOutlinedIcon)`
  float: right;
  color: #a55eea;
  margin-right: 5px;
`;

export const SFavoriteOutlinedIcon = styled(FavoriteOutlinedIcon)`
  float: right;
  color: #e14470;
  margin-right: 5px;
`;
