type TProps = {
  generateNumbersBest: () => void;
  generateNumbersRandom: () => void;
};

export const GenerateNumbersButtons = ({
  generateNumbersBest,
  generateNumbersRandom,
}: TProps) => {
  return (
    <div className="flex flex-wrap justify-center text-xs font-poppins font-medium mt-2 px-1 sm:text-sm">
      <button
        onClick={generateNumbersRandom}
        className="rounded-md px-3 py-1.5 m-1 overflow-hidden relative group cursor-pointer border-2 border-white text-white w-52 sm:w-72"
      >
        <span className="absolute w-80 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
        <span className="relative text-white transition duration-300 group-hover:text-black ease">
          Gerar números aleatórios
        </span>
      </button>
      <button
        onClick={generateNumbersBest}
        className="rounded-md px-3 py-1.5 m-1 overflow-hidden relative group cursor-pointer border-2 border-white text-white w-52 sm:w-72"
      >
        <span className="absolute w-80 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
        <span className="relative text-white transition duration-300 group-hover:text-black ease">
          Gerar os melhores números
        </span>
      </button>
    </div>
  );
};
