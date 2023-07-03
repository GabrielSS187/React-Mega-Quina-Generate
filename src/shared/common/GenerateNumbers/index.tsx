import { useEffect, useState } from "react";
import AnimatedNumbers from "react-animated-numbers";

type TProps = {
  typeGame: "sena" | "quina";
  numbersArray: number[];
};

export const GenerateNumbers = ({ numbersArray, typeGame }: TProps) => {
  const [jumping, setJumping] = useState<number>(0);

  useEffect(() => {
    setJumping(numbersArray[0]);
    const timeout = setTimeout(() => {
      setJumping(0);
    }, 4500);

    return () => {
      clearTimeout(timeout);
    };
  }, [numbersArray]);

  return (
    <section className={`flex flex-wrap gap-2 justify-center mx-1`}>
      {numbersArray.map((number, index) => {
        return (
          <div
            key={index}
            className={`${
              number > 9
                ? "pl-[9.5px] pt-[4px] sm:pl-[13.7px] sm:pt-[10.4px]"
                : "pl-[15.5px] pt-[4px] sm:pl-[23.5px] sm:pt-[10.4px]"
            } bg-white rounded-full w-10 h-10 font-bold text-lg sm:w-16 sm:h-16 sm:text-3xl ${
              jumping > 0 ? "animate-bounce" : ""
            }`}
          >
            <AnimatedNumbers
              animateToNumber={number}
              configs={[
                { mass: 1, tension: 220, friction: 100 },
                { mass: 1, tension: 180, friction: 130 },
                { mass: 1, tension: 280, friction: 90 },
                { mass: 1, tension: 180, friction: 135 },
                { mass: 1, tension: 260, friction: 100 },
                { mass: 1, tension: 210, friction: 180 },
              ]}
            />
          </div>
        );
      })}
    </section>
  );
};
