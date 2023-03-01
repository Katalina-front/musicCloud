import { SongImage } from "./song-image/song-image";
import { SHitCell, SHitsWrapper, SPauseIcon, SPlayIcon } from "./hits.styles";
import { Track } from "./track/track";
import { useGetHits } from "./hits.requests";
import ButtonFollow from "../../button/follow/button";

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
                <SPlayIcon fontSize="large" color="secondary" />
                <SPauseIcon fontSize="large" color="secondary" />
              </a>
            </SHitCell>
          )
        )}
    </SHitsWrapper>
  );
};

export default Hits;
