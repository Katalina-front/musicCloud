import { SongImage } from "./song-image/song-image";
import {
  SButtonPlay,
  SHitCell,
  SHitsWrapper,
  SPauseIcon,
  SPlayIcon,
} from "./hits.styles";
import { Track } from "./track/track";
import { useGetHits } from "./hits.requests";
import ButtonFollow from "../../button/follow/button";
import { useActions } from "../../../hooks/use-actions";
import { TrackItemProps } from "./track/track.types";
import { useRouter } from "next/router";

export const Hits: React.FC<TrackItemProps> = ({ track, active = false }) => {
  const hits = useGetHits();
  const router = useRouter();
  const { playTrack, pauseTrack, setActiveTrack } = useActions();

  const play = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveTrack(track);
    playTrack();
  };

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
            <SHitCell key={item.id} onClick={() => router.push(item.audio)}>
              <SongImage image={item.image} />
              <Track
                informationTitle={item.name}
                informationArtist={item.artist_name}
              />
              <ButtonFollow />
              <SButtonPlay onClick={play}>
                {!active ? (
                  <SPlayIcon fontSize="large" color="secondary" />
                ) : (
                  <SPauseIcon fontSize="large" color="secondary" />
                )}
              </SButtonPlay>
            </SHitCell>
          )
        )}
    </SHitsWrapper>
  );
};

export default Hits;
