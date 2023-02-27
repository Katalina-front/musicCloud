import { ITEMS_ARTISTS } from "./artists.constants";
import { useGetArtists } from "./artists.requests";
import { SArtistsCell, SArtistsWrapper } from "./artists.styled";

export const Artists = () => {
  const artists = useGetArtists();

  console.log(artists);

  return (
    <SArtistsWrapper>
      {artists.results &&
        artists.results
          .slice(0, 8)
          .map(
            (item: {
              id: number;
              website: string;
              image: string;
              name: string;
            }) => (
              <SArtistsCell key={item.id} href={item.website}>
                <img src={item.image} />
                <p>{item.name}</p>
              </SArtistsCell>
            )
          )}
    </SArtistsWrapper>
  );
};

export default Artists;
