/* eslint-disable prefer-const */
import { useState } from "react";

type TProps = {
  quantityNumbers: number;
  numbersGenerates: number[];
  typeGame: "sena" | "quina";
  openModal: string | undefined;
};

export const ListNumbers = ({
  quantityNumbers,
  numbersGenerates,
  typeGame,
  openModal
}: TProps) => {
  const arrayNumbers = Array.from(Array(quantityNumbers).keys()).map(
    (number) => number + 1
  );
  const [delayMarkerNumbers, setDelayMarkerNumbers] = useState<number[]>([]);

  setTimeout(() => {
    setDelayMarkerNumbers(numbersGenerates);
  }, 5000);

  const selectedBgColorByGame = () => {
    switch (typeGame) {
      case "sena":
        return "bg-green-500";
      case "quina":
        return "bg-purple-800";
      default:
        return "";
    }
  };

  return (
    <ul className={`flex flex-wrap justify-center gap-2 px-2 sm:px-5 lg:w-[70rem]`}>
      {arrayNumbers.map((number) => {
        return (
          <li
            key={number}
            className={`${
              delayMarkerNumbers.includes(number) &&
              `${selectedBgColorByGame()} text-white ease-out duration-300`
            } border border-black rounded-full w-12 h-12 text-center text-lg pt-[9.5px] pl-[0.5px] font-bold font-poppins`}
          >
            {number}
          </li>
        );
      })}
    </ul>
  );
};
