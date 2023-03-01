import React from "react";
import { SButtons, SCover, SMusicPlayer, SMusicTrack, SToolbar } from "./footer.styles";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import PauseCircleFilledRoundedIcon from "@mui/icons-material/PauseCircleFilledRounded";
import FastForwardRoundedIcon from "@mui/icons-material/FastForwardRounded";
import FastRewindRoundedIcon from "@mui/icons-material/FastRewindRounded";
import AudioFileRoundedIcon from "@mui/icons-material/AudioFileRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

export const Footer = () => {
  return (
    <SMusicPlayer>
    <SMusicTrack />
    <SToolbar>
      <SCover className="icon">
        <AudioFileRoundedIcon fontSize="large" />
      </SCover>
      <SButtons>
        <FastRewindRoundedIcon fontSize="large" />
        <PlayCircleOutlineRoundedIcon fontSize="large" />
        <FastForwardRoundedIcon fontSize="large" />
      </SButtons>
      <FavoriteBorderRoundedIcon fontSize="medium" />
      <SendRoundedIcon fontSize="medium" />
    </SToolbar>
    </SMusicPlayer>
  );
};
