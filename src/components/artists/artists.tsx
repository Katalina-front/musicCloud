import { ITEMS_ARTISTS } from "./artists.constants";
import { SArtistsCell, SArtistsWrapper } from "./artists.styled";

export const Artists = () => {
  return (
    <SArtistsWrapper>
      {ITEMS_ARTISTS.results.map((item) => (
        <SArtistsCell href={item.tracks.map((i) => i.audio)}>
          <img src={item.image} />
          <p>{item.name}</p>
        </SArtistsCell>
      ))}
    </SArtistsWrapper>
  );
};

export default Artists;
