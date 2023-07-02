import AnimatedNumbers from "react-animated-numbers";

type TProps = {
  typeGame: "sena" | "quina";
  numbersArray: number[];
};

export const GenerateNumbersComponent = ({
  numbersArray,
  typeGame,
}: TProps) => {
  const selectColorByTypeGame = () => {
    switch (typeGame) {
      case "sena":
        return "border-solid border-2 border-green-500";
      case "quina":
        return "border-solid border-2 border-blue-500";
      default:
        return "";
    }
  };

  return (
    <section className={`flex gap-3 justify-center`}>
      {numbersArray.map((number, index) => {
        return (
          <div
            key={index}
            className={`${selectColorByTypeGame()} ${
              number > 9 ? "pl-[24px] pt-[13.3px]" : "pl-[33.7px] pt-[13px]"
            } rounded-full text-center w-24 h-24 pos`}
          >
            <AnimatedNumbers
              animateToNumber={number}
              fontStyle={{ fontSize: 40 }}
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
