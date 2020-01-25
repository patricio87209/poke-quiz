import { stateTypes, createPlayingState, createLoadingState, createWinState, createLoseState } from './states'
import { actionTypes } from './actions'

export default function quizReducer(state = { type: stateTypes.loading }, action) {
  switch (state.type) {
    case stateTypes.loading:
      return loadingReducer(state, action);
    case stateTypes.playing:
      return playingReducer(state, action);
    case stateTypes.win:
    case stateTypes.lose:
      return endGameReducer(state, action);
    default:
      return state;
  }
}

function loadingReducer(state, action) {
  switch (action.type) {
    case actionTypes.onLoad:
      return createPlayingState(action.answer, action.options);
    default:
      return state;
  }
}

function playingReducer(state, action) {
  switch (action.type) {
    case actionTypes.onAnswer:
      return isCorrectAnswer(state, action)
        ? createWinState()
        : createLoseState();
    default:
      return state;
  }
}

function endGameReducer(state, action) {
  switch (action.type) {
    case actionTypes.onStart:
      return createLoadingState();
    default:
      return state;
  }
}

function isCorrectAnswer(state, action) {
  return state.answer === action.answer;
}
