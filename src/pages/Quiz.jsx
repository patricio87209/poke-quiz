import React, { useCallback, useEffect, useState } from "react";
import { string, bool, func } from "prop-types";
import styled from "styled-components";
import { getQuiz } from "../services/pokemons";

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
      <QuizFigure>sarasa</QuizFigure>
      <QuizOptions>
        {quiz && quiz.options.map(({id, name}) => <div key={id}>{name}</div>) }
        </QuizOptions>
    </QuizLayout>
  );
}

Quiz.propTypes = {};

Quiz.defaultProps = {};
