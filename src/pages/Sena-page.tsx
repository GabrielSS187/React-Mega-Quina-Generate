/* eslint-disable prefer-const */
import { useState } from "react";

import { GenerateNumbersComponent } from "../shared/common/GenerateNumbersComponent";

const useSenaPage = () => {
  const [numbersMegaSena, setNumbersMegaSena] = useState<number[]>([
    0o0, 0o0, 0o0, 0o0, 0o0, 0o0,
  ]);

  function generateNumbersMegaSena(): void {
    let numbers: number[] = [];
    while (numbers.length < 6) {
      const number = Math.floor(Math.random() * 60) + 1;
      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }
    setNumbersMegaSena(numbers);
  }

  return { numbersMegaSena, generateNumbersMegaSena };
};

export const SenaPage = () => {
  const { numbersMegaSena, generateNumbersMegaSena } = useSenaPage();

  return (
    <>
      <h1>Sena</h1>
      <GenerateNumbersComponent numbersArray={numbersMegaSena} typeGame="sena" />
      <button onClick={() => generateNumbersMegaSena()}>GGGG</button>
    </>
  );
};
