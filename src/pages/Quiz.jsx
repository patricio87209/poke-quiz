import React, { useCallback, useEffect, useState } from "react";
import { string, bool, func } from "prop-types";
import styled from "styled-components";

const QuizLayout = styled.main`
  display: grid;
  grid-template-rows: 1fr 1fr;
  height: 100%;
`;
const QuizFigure = styled.figure``;

const QuizOptions = styled.div``;

export default function Quiz() {
  return (
    <QuizLayout>
      <QuizFigure>sarasa</QuizFigure>
      <QuizOptions>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </QuizOptions>
    </QuizLayout>
  );
}

Quiz.propTypes = {};

Quiz.defaultProps = {};
