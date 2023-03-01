import { SImage } from "./song-image.styles";

export const SongImage = ({ image }: { image: string }) => {
  return (
    <SImage>
      <img src={image} />
    </SImage>
  );
};
