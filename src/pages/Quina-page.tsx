/* eslint-disable prefer-const */
import { useState } from "react";
import { CopySimple } from "@phosphor-icons/react";

import { GenerateNumbersButtons } from "../shared/common/ButtonsContainer/GenerateNumbersButtons";
import { SendNumbersButtons } from "../shared/common/ButtonsContainer/SendNumbersButtons";
import { GenerateNumbers } from "../shared/common/GenerateNumbers";
import { ListNumbers } from "../shared/common/ListNumbers";

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

    setTimeout(() => {
      window.scrollTo({behavior: "smooth", top: 300})
    }, 5000)
  }

  return { numbersQuina, generateNumbersQuina };
};

export const QuinaPage = () => {
  const { generateNumbersQuina, numbersQuina } = useQuinaPage();

  return (
    <main>
      <div className="absolute top-[0] w-full bg-purple-800 pb-2 rounded-b-3xl">
        <div className="flex flex-col gap-1 sm:gap-2 mt-20">
          <div className="flex justify-center text-white text-xs mb-1 font-poppins font-medium sm:text-sm">
            <button className="flex gap-1 items-center hover:border-dotted hover:border-b-2  hover:pb-[1px]">
              <p>Copia Números</p>
              <CopySimple size={20} />
            </button>
          </div>
          <GenerateNumbers numbersArray={numbersQuina} typeGame="quina" />
          <GenerateNumbersButtons
            generateNumbersRandom={generateNumbersQuina}
            generateNumbersBest={generateNumbersQuina}
          />
          <SendNumbersButtons />
        </div>
      </div>
      <div className="flex justify-center mt-72">
        <ListNumbers
          quantityNumbers={80}
          numbersGenerates={numbersQuina}
          typeGame="quina"
        />
      </div>
    </main>
  );
};
