import { SongImage } from "./song-image/song-image";
import { ITEMS_HITS } from "./hits.constants";
import {
  SFavoriteBorderOutlinedIcon,
  SFavoriteOutlinedIcon,
  SHitCell,
  SHitsWrapper,
  SPauseCircleOutlinedIcon,
  SPlayCircleOutlineOutlinedIcon,
} from "./hits.styles";
import { useState } from "react";
import { Track } from "./track/track";
// import { useGetHits } from "./hits.requests";

export const Hits = () => {
  // const hits = useGetHits();
  const [liked, setLiked] = useState(false);

  return (
    <SHitsWrapper>
      {ITEMS_HITS.results.map((item) => (
        <SHitCell key={item.id}>
          <SongImage image={item.image} />
          <Track
            informationTitle={item.name}
            informationArtist={item.artist_name}
          />
          <button onClick={() => setLiked(!liked)} title="Нравится">
            {liked ? (
              <SFavoriteOutlinedIcon fontSize="medium" color="error" />
            ) : (
              <SFavoriteBorderOutlinedIcon fontSize="medium" color="error" />
            )}
          </button>
          <a href={item.audio}>
            <SPlayCircleOutlineOutlinedIcon
              fontSize="large"
              color="secondary"
            />
            <SPauseCircleOutlinedIcon fontSize="large" color="secondary" />
          </a>
        </SHitCell>
      ))}
    </SHitsWrapper>
  );
};

export default Hits;
