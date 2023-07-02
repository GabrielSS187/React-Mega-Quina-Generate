/* eslint-disable prefer-const */
import { useState } from "react";
import { GenerateNumbersComponent } from "../shared/common/GenerateNumbersComponent";

const useQuinaPage = () => {
  const [numbersQuina, setNumbersQuina] = useState<number[]>([
    0o0, 0o0, 0o0, 0o0, 0o0,
  ]);

  function generateNumbersQuina(): void {
    let numbers: number[] = [];
    while (numbers.length < 5) {
      const number = Math.floor(Math.random() * 80) + 1;
      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }
    setNumbersQuina(numbers);
  }

  return { numbersQuina, generateNumbersQuina };
};

export const QuinaPage = () => {
  const { generateNumbersQuina, numbersQuina } = useQuinaPage();

  return (
    <>
      <h1>Sena</h1>
      <GenerateNumbersComponent numbersArray={numbersQuina} typeGame="quina" />
      <button onClick={() => generateNumbersQuina()}>GGGG</button>
    </>
  );
};