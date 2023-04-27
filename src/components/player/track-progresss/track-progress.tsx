import React from "react";
import { STrackContainer } from "./track-progress.styles";

interface TrackProgressType {
  left?: number;
  right?: number;
  onChange: (e: any) => void;
}

export const TrackProgress: React.FC<TrackProgressType> = ({
  left,
  right,
  onChange,
}) => {
  return (
    <STrackContainer>
      <input
        type="range"
        min={0}
        max={right}
        value={left}
        onChange={onChange}
      />
    </STrackContainer>
  );
};

export default TrackProgress;
