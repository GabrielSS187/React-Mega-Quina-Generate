/* eslint-disable prefer-const */
import { useState } from "react";

import { GenerateNumbersComponent } from "../shared/common/GenerateNumbersComponent";

type TProps = {
  activeGenerateNumbers: boolean;
}

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
    <main>
      <div className="fixed top-[0] w-full bg-green-500 h-60 rounded-b-3xl">
        <div className="mt-24">
          <GenerateNumbersComponent numbersArray={numbersMegaSena} typeGame="sena" />
        </div>
      </div>
      <div className="mt-60">
        <button onClick={() => generateNumbersMegaSena()}>LLLL</button>
      </div>
    </main>
  );
};
