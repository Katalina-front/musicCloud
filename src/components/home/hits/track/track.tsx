import { STrackInformation } from "./track.styles";
import { TTrackInformation } from "./track.types";

export const Track: React.FC<TTrackInformation> = ({
  informationTitle,
  informationArtist,
}) => {
  return (
    <STrackInformation className="track-information">
      <div className="information-title">{informationTitle}</div>
      <div className="information-artist">{informationArtist}</div>
    </STrackInformation>
  );
};
