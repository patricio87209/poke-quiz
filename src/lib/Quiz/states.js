export const stateTypes = {
    loading: "loading",
    playing: "playing",
    win: "win",
    lose: "lose"
  };

export function createPlayingState (answer, options) {
    return {
        type: stateTypes.playing,
        answer, 
        options
    }
}
export function createWinState () {
    return {
        type: stateTypes.win
    }
}
export function createLoseState () {
    return {
        type: stateTypes.lose
    }
}
export function createLoadingState () {
    return {
        type: stateTypes.loading
    }
}