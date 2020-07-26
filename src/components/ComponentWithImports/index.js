import React from 'react';
import greeting from '../../utils/greeting';
import { sum } from '../../utils/helpers';
import { add } from '../../utils/anotherHelpers';

const ComponentWithImports = () => {
  const sumResult = sum(2,3);
  const addResult = add(3, 4);
  const greetingResult = greeting();
  return (
    <div>
      <h2>Component With Imports</h2>
      <p data-test="greetingResult">Greeting Result: { greetingResult }</p>
      <p data-test="sumResult">Sum Result: { sumResult }</p>
      <p data-test="addResult">Add Result: { addResult }</p>
    </div>
  )
};

export default ComponentWithImports;