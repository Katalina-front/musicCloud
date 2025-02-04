import { TrackState } from './track-reducer.types'

const initialState: TrackState = {
    tracks: [],
    errore: ''
}

export const trackReducer = (state: any, actiion: { type: any; payload: any }) => {
    switch (actiion.type) {
        case 'FETCH_TRACKS':
            return {
                ...state,
                tracks: actiion.payload
            }
        case 'FETCH_TRACKS_ERROR':
            return {
                ...state,
                errore: actiion.payload
            }
        default:
            return state
    }
}
 