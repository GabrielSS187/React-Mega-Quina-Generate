/* eslint-disable prefer-const */
import { useState } from "react";
import { CopySimple } from "@phosphor-icons/react";
import { toast } from "react-toastify";
import { useCopyToClipboard } from "usehooks-ts";

import { GenerateNumbers } from "../shared/common/GenerateNumbers";
import { GenerateNumbersButtons } from "../shared/common/ButtonsContainer/GenerateNumbersButtons";
import { SendNumbersButtons } from "../shared/common/ButtonsContainer/SendNumbersButtons";
import { ListNumbers } from "../shared/common/ListNumbers";
import { TeAndWaModal } from "../shared/common/Modals/TeAndWaModal";
import { Footer } from "../shared/components/Footer";

const useSenaPage = () => {
  const [numbersMegaSena, setNumbersMegaSena] = useState<number[]>([
    0o0, 0o0, 0o0, 0o0, 0o0, 0o0,
  ]);
  const [openModal, setOpenModal] = useState<
    "WhatsApp*" | "Telegram*" | undefined
  >(undefined);
  const [value, setCopy] = useCopyToClipboard();

  const bestNumbers: number[] = [
    2, 10, 16, 32, 45, 49, 5, 26, 35, 46, 54, 17, 19, 22, 57, 3, 7, 29, 52, 56,
    14, 30, 53, 37, 33, 23, 34, 42, 20, 59,
  ];

  const notify = (): void => {
    setTimeout(() => {
      window.scrollTo({ behavior: "smooth", top: 300 });
      toast.success(`Números gerados com sucesso.`, {
        toastId: "success-sena-0*",
        position: "bottom-center",
      });
    }, 5000);
  };

  const generateNumbersMegaSena = (): void => {
    let numbers: number[] = [];
    while (numbers.length < 6) {
      const number = Math.floor(Math.random() * 60) + 1;
      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }
    setNumbersMegaSena(numbers);
    notify();
  };

  const selectRandomBestNumbers = (
    numbersList: number[],
    targetSize: number,
    minEvenCount: number
  ): void => {
    const result: number[] = [];
    let eventCount = 0;

    while (result.length < targetSize) {
      const randomIndex = Math.floor(Math.random() * numbersList.length);
      const selectedNumber = bestNumbers[randomIndex];

      if (!result.includes(selectedNumber)) {
        result.push(selectedNumber);
        if (selectedNumber % 2 === 0) {
          eventCount++;
        }
      }
    }

    if (eventCount < minEvenCount) {
      return selectRandomBestNumbers(numbersList, targetSize, minEvenCount);
    }

    setNumbersMegaSena(result);
    notify();
  };

  const copyNumbers = (numbers: number[]): void => {
    if (numbers[0] === 0o0) {
      toast.error("Erro: Gere os números primeiro!", {
        toastId: "error-sena-0*",
        position: "bottom-center",
      });
      return;
    }

    const transformedInString = String(numbers);
    toast.promise(
      setCopy(transformedInString),
      {
        pending: `Esta sendo copiado...`,
        success: `Copiado: ${transformedInString}`,
      },
      {
        toastId: "success-sena-1*",
        position: "bottom-center",
      }
    );
  };

  const verifyIfNumbersMegaSena = (): { contem: boolean; text: string } => {
    if (numbersMegaSena[0] === 0o0) {
      return {
        contem: false,
        text: "Gere os números é receba no seu aplicativo.",
      };
    }

    return { contem: true, text: String(numbersMegaSena) };
  };

  return {
    numbersMegaSena,
    generateNumbersMegaSena,
    selectRandomBestNumbers,
    bestNumbers,
    copyNumbers,
    openModal,
    setOpenModal,
    verifyIfNumbersMegaSena,
  };
};

export const SenaPage = () => {
  const {
    numbersMegaSena,
    generateNumbersMegaSena,
    selectRandomBestNumbers,
    bestNumbers,
    copyNumbers,
    openModal,
    setOpenModal,
    verifyIfNumbersMegaSena,
  } = useSenaPage();

  return (
    <main>
      <TeAndWaModal
        activeModalName={openModal}
        setActiveModalName={setOpenModal}
        sendTextObj={verifyIfNumbersMegaSena}
      />
      <div className="top-[0] absolute w-full bg-green-500 pb-2 rounded-b-3xl">
        <div className="flex flex-col gap-1 sm:gap-2 mt-20">
          <div className="flex justify-center text-white text-xs mb-1 font-poppins font-medium sm:text-sm">
            <button
              onClick={() => copyNumbers(numbersMegaSena)}
              className="flex gap-1 items-center hover:border-dotted hover:border-b-2  hover:pb-[1px]"
            >
              <p>Copia Números</p>
              <CopySimple size={20} />
            </button>
          </div>
          <GenerateNumbers numbersArray={numbersMegaSena} typeGame="sena" />
          <GenerateNumbersButtons
            generateNumbersRandom={generateNumbersMegaSena}
            generateNumbersBest={() =>
              selectRandomBestNumbers(bestNumbers, 6, 2)
            }
          />
          <SendNumbersButtons
            whatsApp={() => setOpenModal("WhatsApp*")}
            telegram={() => setOpenModal("Telegram*")}
            waParams={openModal}
            teParams={openModal}
          />
        </div>
      </div>
      <div className="flex justify-center mt-72 mb-4">
        <ListNumbers
          quantityNumbers={60}
          numbersGenerates={numbersMegaSena}
          typeGame="sena"
        />
      </div>
      <br />
      <Footer actualPage="sena" />
    </main>
  );
};
