import { ITrack } from '../player/player-reducer.types';

export interface TrackState {
    tracks: ITrack[];
    errore: string;

}

export enum TrackActionTypes {
    FETCH_TRACKS = 'FETCH_TRACKS',
    FETCH_TRACKS_ERRORE = 'FETCH_TRACKS_ERRORE',
}

interface FetchTracksAction {
    type: TrackActionTypes.FETCH_TRACKS;
    payload: ITrack[];
}

interface FetchTracksActionError {
    type: TrackActionTypes.FETCH_TRACKS_ERRORE;
    payload: string;
}

export type TrackAction = FetchTracksAction | FetchTracksActionError;