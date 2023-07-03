/* eslint-disable prefer-const */
import { useState } from "react";
import { CopySimple } from "@phosphor-icons/react";
import { toast } from "react-toastify";
import { useCopyToClipboard } from "usehooks-ts";

import { GenerateNumbers } from "../shared/common/GenerateNumbers";
import { GenerateNumbersButtons } from "../shared/common/ButtonsContainer/GenerateNumbersButtons";
import { SendNumbersButtons } from "../shared/common/ButtonsContainer/SendNumbersButtons";
import { ListNumbers } from "../shared/common/ListNumbers";

const useSenaPage = () => {
  const [numbersMegaSena, setNumbersMegaSena] = useState<number[]>([
    0o0, 0o0, 0o0, 0o0, 0o0, 0o0,
  ]);
  const [value, setCopy] = useCopyToClipboard();

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
      toast.success(`Números gerados com sucesso.`, {
        toastId: "success-sena-0*",
        position: "bottom-center",
      })
    }, 5000)
  }

  const copyNumbers = (numbers: number[]): void => {
    if (numbers[0] === 0o0) {
      toast.error("Erro: Gere os números primeiro!", {
        toastId: "error-sena-0*",
        position: "bottom-center",
      })
      return
    }
    
    const transformedInString = String(numbers);
    toast.promise(
      setCopy(transformedInString),
      {
        pending: `Esta sendo copiado...`,
        success: `Copiado: ${transformedInString}`,
      },
      {
        toastId:  "success-sena-1*",
        position: "bottom-center",
      }
    )
  }

  return { numbersMegaSena, generateNumbersMegaSena, copyNumbers };
};

export const SenaPage = () => {
  const { numbersMegaSena, generateNumbersMegaSena, copyNumbers } = useSenaPage();

  return (
    <main>
      <div className="top-[0] absolute w-full bg-green-500 pb-2 rounded-b-3xl">
        <div className="flex flex-col gap-1 sm:gap-2 mt-20">
          <div className="flex justify-center text-white text-xs mb-1 font-poppins font-medium sm:text-sm">
            <button onClick={() => copyNumbers(numbersMegaSena)} className="flex gap-1 items-center hover:border-dotted hover:border-b-2  hover:pb-[1px]">
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
