/* eslint-disable prefer-const */
import { useState } from "react";

type TProps = {
  quantityNumbers: number;
  numbersGenerates: number[];
  typeGame: "sena" | "quina";
};

export const ListNumbers = ({
  quantityNumbers,
  numbersGenerates,
  typeGame,
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

  const selectedBorderByTypeGame = () => {
    switch (typeGame) {
      case "sena":
        return "hover:shadow-green-500/80";
      case "quina":
        return "hover:shadow-purple-500/80";
      default:
        return "hover:shadow-green-500/80";
    }
  };

  return (
    <ul
      className={`flex flex-wrap justify-center gap-2 px-2 sm:px-5 lg:w-[70rem]`}
    >
      {arrayNumbers.map((number) => {
        return (
          <li
            key={number}
            className={`${
              delayMarkerNumbers.includes(number) &&
              `${selectedBgColorByGame()} text-white ease-out duration-300`
            } border border-black rounded-full w-12 h-12 text-center text-lg pt-[9.5px] pl-[0.5px] font-bold font-poppins hover:shadow-[0_3px_10px_rgb(0,0,0,0.5)] ${selectedBorderByTypeGame()} hover:border-none transition-all ease-in-out`}
          >
            {number}
          </li>
        );
      })}
    </ul>
  );
};
