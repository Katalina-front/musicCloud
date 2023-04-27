import React, { useEffect } from "react";
import {
  SButtonPlay,
  SButtonSocial,
  SButtonVolume,
  SCover,
  SMusicPlayer,
  SMusicTrack,
  SToolbar,
} from "./player.styles";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import PauseCircleFilledRoundedIcon from "@mui/icons-material/PauseCircleFilledRounded";
import AudioFileRoundedIcon from "@mui/icons-material/AudioFileRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import TrackProgress from "./track-progresss/track-progress";
import VolumeOffRoundedIcon from "@mui/icons-material/VolumeOffRounded";
import VolumeUpRoundedIcon from "@mui/icons-material/VolumeUpRounded";
import { useTypedSelector } from "../../hooks/use-typed-selected";
import { useActions } from "../../hooks/use-actions";

let audio: HTMLAudioElement;

export const Player = () => {
  const { pause, volume, active, duration, currentTime } = useTypedSelector(
    (state) => state.player
  );
  const {
    pauseTrack,
    playTrack,
    setVolume,
    setCurrent,
    setDuration,
    setActiveTrack,
  } = useActions();

  useEffect(() => {
    if (!audio) {
      audio = new Audio();
    } else {
      setAudio();
      play();
    }
  }, [active]);

  const setAudio = () => {
    if (active) {
      audio.src = active.audio!;
      audio.volume = Number(volume) / 100;
      audio.onloadedmetadata = () => {
        setDuration(Math.ceil(audio.duration));
      };
      audio.ontimeupdate = () => {
        setCurrent(Math.ceil(audio.currentTime));
      };
    }
  };

  const play = () => {
    if (pause) {
      playTrack();
      audio.play();
    } else {
      pauseTrack();
      audio.pause();
    }
  };

  if (!active) {
    return null;
  }

  const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    audio.volume = Number(e.target.value) / 100;
    setVolume(Number(e.target.value));
  };

  const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    audio.currentTime = Number(e.target.value);
    setCurrent(Number(e.target.value));
  };

  return (
    <SMusicPlayer>
      <SMusicTrack>
        <TrackProgress
          left={currentTime}
          right={duration}
          onChange={changeCurrentTime}
        />
      </SMusicTrack>
      <SToolbar>
        <SCover>
          <SButtonPlay onClick={play}>
            {pause ? (
              <PlayCircleOutlineRoundedIcon fontSize="large" />
            ) : (
              <PauseCircleFilledRoundedIcon fontSize="large" />
            )}
          </SButtonPlay>
          <AudioFileRoundedIcon fontSize="large" />
          <div className="inform">
            <div>{active?.name}</div>
            <div>{active?.artist_name}</div>
          </div>
        </SCover>
        <SButtonVolume>
          <VolumeOffRoundedIcon fontSize="medium" />
          <TrackProgress left={volume} right={100} onChange={changeVolume} />
          <VolumeUpRoundedIcon fontSize="medium" />
        </SButtonVolume>
        <SButtonSocial>
          <FavoriteBorderRoundedIcon fontSize="medium" />
          <SendRoundedIcon fontSize="medium" />
        </SButtonSocial>
      </SToolbar>
    </SMusicPlayer>
  );
};
