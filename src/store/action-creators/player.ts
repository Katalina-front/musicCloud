import { TPlayerAction, PlayerActionTypes, ITrack } from '../reducers/player/player-reducer.types'

export const playTrack = (): TPlayerAction => {
    return { type: PlayerActionTypes.PLAY }
}

export const pauseTrack = (): TPlayerAction => {
    return { type: PlayerActionTypes.PAUSE }
}

export const setDuration = (payload: number): TPlayerAction => {
    return { type: PlayerActionTypes.SET_DURATION, payload }
}

export const setVolume = (payload: number): TPlayerAction => {
    return { type: PlayerActionTypes.SET_VOLUME, payload }
}

export const setCurrent = (payload: number): TPlayerAction => {
    return { type: PlayerActionTypes.SET_CURRENT_TIME, payload }
}

export const setActiveTrack = (payload: ITrack): TPlayerAction => {
    return { type: PlayerActionTypes.SET_ACTIVE, payload }
}