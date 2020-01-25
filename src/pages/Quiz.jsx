import React, { useCallback, useEffect, useState } from "react";
import { string, bool, func } from "prop-types";
import styled from "styled-components";
import { getQuiz } from "../services/pokemons";
import Button from "../components/Button";
import ButtonGroup from "../components/ButtonGroup";

const QuizLayout = styled.main`
  display: grid;
  grid-template-rows: 1fr 1fr;
  height: 100%;
`;
const QuizFigure = styled.figure``;

const QuizOptions = styled.div``;

export default function Quiz() {
  const [quiz, setQuiz] = useState(null);

  useEffect(() => {
    getQuiz().then(setQuiz);
  }, []);

  return (
    <QuizLayout>
      <QuizFigure>
        <img src={quiz && quiz.options.find(pokemon => pokemon.id === quiz.answer).image} alt= "answer"/>
      </QuizFigure>

      <QuizOptions>
        <ButtonGroup>
          {quiz &&
            quiz.options.map(({ id, name }) => (
              <Button key={id}>{name}</Button>
            ))}
        </ButtonGroup>
      </QuizOptions>
    </QuizLayout>
  );
}

Quiz.propTypes = {};

Quiz.defaultProps = {};
