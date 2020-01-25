export const actionTypes = {
  onLoad: "onLoad",
  onAnswer: "onAnswer",
  onStart: "onStart"
};

export function onLoad(answer, options) {
  return {
    type: actionTypes.onLoad,
    answer,
    options
  };
}

export function onAnswer(answer) {
  return {
    type: actionTypes.onAnswer,
    answer
  };
}

export function onStart() {
  return { type: actionTypes.onStart };
}
