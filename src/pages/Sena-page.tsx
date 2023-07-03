/* eslint-disable prefer-const */
import { useState } from "react";
import { CopySimple } from "@phosphor-icons/react";

import { GenerateNumbers } from "../shared/common/GenerateNumbers";
import { GenerateNumbersButtons } from "../shared/common/ButtonsContainer/GenerateNumbersButtons";
import { SendNumbersButtons } from "../shared/common/ButtonsContainer/SendNumbersButtons";
import { ListNumbers } from "../shared/common/ListNumbers";

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

    setTimeout(() => {
      window.scrollTo({behavior: "smooth", top: 300})
    }, 5000)
  }

  return { numbersMegaSena, generateNumbersMegaSena };
};

export const SenaPage = () => {
  const { numbersMegaSena, generateNumbersMegaSena } = useSenaPage();

  return (
    <main>
      <div className="top-[0] absolute w-full bg-green-500 pb-2 rounded-b-3xl">
        <div className="flex flex-col gap-1 sm:gap-2 mt-20">
          <div className="flex justify-center text-white text-xs mb-1 font-poppins font-medium sm:text-sm">
            <button className="flex gap-1 items-center hover:border-dotted hover:border-b-2  hover:pb-[1px]">
              <p>Copia Números</p>
              <CopySimple size={20} />
            </button>
          </div>
          <GenerateNumbers numbersArray={numbersMegaSena} typeGame="sena" />
          <GenerateNumbersButtons
            generateNumbersRandom={generateNumbersMegaSena}
            generateNumbersBest={generateNumbersMegaSena}
          />
          <SendNumbersButtons />
        </div>
      </div>
      <div className="flex justify-center mt-72">
        <ListNumbers
          quantityNumbers={60}
          numbersGenerates={numbersMegaSena}
          typeGame="sena"
        />
      </div>
    </main>
  );
};
