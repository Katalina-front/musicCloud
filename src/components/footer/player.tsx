import React from "react";
import {
  SButtons,
  SCover,
  SMusicPlayer,
  SMusicTrack,
  SToolbar,
} from "./player.styles";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import PauseCircleFilledRoundedIcon from "@mui/icons-material/PauseCircleFilledRounded";
import FastForwardRoundedIcon from "@mui/icons-material/FastForwardRounded";
import FastRewindRoundedIcon from "@mui/icons-material/FastRewindRounded";
import AudioFileRoundedIcon from "@mui/icons-material/AudioFileRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import TrackProgress from "./track-progresss/track-progress";
import VolumeOffRoundedIcon from "@mui/icons-material/VolumeOffRounded";
import VolumeUpRoundedIcon from "@mui/icons-material/VolumeUpRounded";

export const Footer = () => {
  return (
    <SMusicPlayer>
      <SMusicTrack>
        <TrackProgress onChange={() => ({})} />
      </SMusicTrack>
      <SToolbar>
        <SCover className="icon">
          <AudioFileRoundedIcon fontSize="large" />
        </SCover>
        <SButtons>
          <FastRewindRoundedIcon fontSize="large" />
          <PlayCircleOutlineRoundedIcon fontSize="large" />
          <FastForwardRoundedIcon fontSize="large" />
        </SButtons>
        <VolumeOffRoundedIcon fontSize="medium" />
        <TrackProgress onChange={() => ({})} />
        <VolumeUpRoundedIcon fontSize="medium" />
        <FavoriteBorderRoundedIcon fontSize="medium" />
        <SendRoundedIcon fontSize="medium" />
      </SToolbar>
    </SMusicPlayer>
  );
};
