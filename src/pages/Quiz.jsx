import React, { useEffect, useReducer, useCallback } from "react";
import styled from "styled-components";

import Button from "../components/Button";
import ButtonGroup from "../components/ButtonGroup";

import { getQuiz } from "../services/pokemons";

import reducer from "../lib/Quiz/reducer";
import { onLoad, onAnswer, onStart } from "../lib/Quiz/actions";
import { createLoadingState, stateTypes } from "../lib/Quiz/states";

const QuizLayout = styled.main`
  display: grid;
  grid-template-rows: 1fr 1fr;
  height: 100%;
`;
const QuizFigure = styled.figure``;

const QuizOptions = styled.div``;

export default function Quiz() {
  const [{ type, answer, options }, dispatch] = useReducer(
    reducer,
    createLoadingState()
  );

  const onQuizLoaded = useCallback(
    (answer, options) => dispatch(onLoad(answer, options)),
    [dispatch]
  );

  const loadQuiz = useCallback(() => {
    dispatch(onStart());
    getQuiz().then(({ answer, options }) => onQuizLoaded(answer, options));
  }, [onQuizLoaded]);

  useEffect(loadQuiz, []);

  const onAnswerSelected = useCallback(
    ({ target: { id: selectedAnswer } }) => {
      dispatch(onAnswer(selectedAnswer));
      setTimeout(loadQuiz, 2000);
    },
    [dispatch, loadQuiz]
  );

  return (
    <QuizLayout>
      <QuizFigure>
        {options && answer && (
          <img
            src={options.find(pokemon => pokemon.id === answer).image}
            alt="answer"
          />
        )}
      </QuizFigure>

      <QuizOptions>
        <ButtonGroup>
          {options &&
            options.map(({ id, name }) => (
              <Button
                key={id}
                id={id}
                onClick={onAnswerSelected}
                disabled={type !== stateTypes.playing}
              >
                {name}
              </Button>
            ))}
        </ButtonGroup>
      </QuizOptions>
    </QuizLayout>
  );
}

Quiz.propTypes = {};

Quiz.defaultProps = {};
