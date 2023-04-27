import { ITrack } from '../../../../store/reducers/player/player-reducer.types';

export type TTrackInformation = {
    informationTitle?: string,
    informationArtist: string,
}

export type TrackItemProps = {
    track: ITrack;
    active?: boolean;
}