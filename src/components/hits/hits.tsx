import { SongImage } from "./song-image/song-image";
import { ITEMS_HITS } from "./hits.constants";
import {
  SHitCell,
  SHitsWrapper,
  SPauseCircleOutlinedIcon,
  SPlayCircleOutlineOutlinedIcon,
} from "./hits.styles";
import { useState } from "react";
import { Track } from "./track/track";
import { useGetHits } from "./hits.requests";
import ButtonFollow from "./button/follow/button";

export const Hits = () => {
  const hits = useGetHits();

  return (
    <SHitsWrapper>
      {hits.results &&
        hits.results.map(
          (item: {
            id: number;
            image: string;
            name: string;
            artist_name: string;
            audio: string;
          }) => (
            <SHitCell key={item.id}>
              <SongImage image={item.image} />
              <Track
                informationTitle={item.name}
                informationArtist={item.artist_name}
              />
              <ButtonFollow />
              <a href={item.audio}>
                <SPlayCircleOutlineOutlinedIcon
                  fontSize="large"
                  color="secondary"
                />
                <SPauseCircleOutlinedIcon fontSize="large" color="secondary" />
              </a>
            </SHitCell>
          )
        )}
    </SHitsWrapper>
  );
};

export default Hits;
