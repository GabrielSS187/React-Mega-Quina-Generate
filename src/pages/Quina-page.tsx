/* eslint-disable prefer-const */
import { useState } from "react";
import { CopySimple } from "@phosphor-icons/react";
import { useCopyToClipboard } from "usehooks-ts";
import { toast } from "react-toastify";

import { GenerateNumbersButtons } from "../shared/common/ButtonsContainer/GenerateNumbersButtons";
import { SendNumbersButtons } from "../shared/common/ButtonsContainer/SendNumbersButtons";
import { GenerateNumbers } from "../shared/common/GenerateNumbers";
import { ListNumbers } from "../shared/common/ListNumbers";
import { TeAndWaModal } from "../shared/common/Modals/TeAndWaModal";
import { Footer } from "../shared/components/Footer";

const useQuinaPage = () => {
  const [numbersQuina, setNumbersQuina] = useState<number[]>([
    0o0, 0o0, 0o0, 0o0, 0o0,
  ]);
  const [openModal, setOpenModal] = useState<
    "WhatsApp*" | "Telegram*" | undefined
  >(undefined);
  const [value, setCopy] = useCopyToClipboard();

  const bestNumbers: number[] = [
    1, 9, 27, 53, 77, 25, 32, 34, 37, 68, 41, 44, 61, 14, 18, 30, 51, 60, 8, 24,
    70, 6, 23, 26, 31, 66, 4, 49, 52, 16, 29, 7, 28, 4, 63, 39, 55, 10, 79, 58,
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

  const generateNumbersQuina = (): void => {
    let numbers: number[] = [];
    while (numbers.length < 5) {
      const number = Math.floor(Math.random() * 80) + 1;
      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }
    setNumbersQuina(numbers);
    notify()
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

    setNumbersQuina(result);
    notify();
  };


  const copyNumbers = (numbers: number[]): void => {
    if (numbers[0] === 0o0) {
      toast.error("Erro: Gere os números primeiro!", {
        toastId: "error-quina-0*",
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
        toastId: "success-quina-1*",
        position: "bottom-center",
      }
    );
  };

  const verifyIfNumbersMegaSena = (): { contem: boolean; text: string } => {
    if (numbersQuina[0] === 0o0) {
      return {
        contem: false,
        text: "Gere os números é receba no seu aplicativo.",
      };
    }

    return { contem: true, text: String(numbersQuina) };
  };

  return {
    numbersQuina,
    generateNumbersQuina,
    selectRandomBestNumbers,
    bestNumbers,
    copyNumbers,
    openModal,
    setOpenModal,
    verifyIfNumbersMegaSena,
  };
};

export const QuinaPage = () => {
  const {
    generateNumbersQuina,
    selectRandomBestNumbers,
    bestNumbers,
    numbersQuina,
    copyNumbers,
    openModal,
    setOpenModal,
    verifyIfNumbersMegaSena,
  } = useQuinaPage();

  return (
    <main>
      <TeAndWaModal
        activeModalName={openModal}
        setActiveModalName={setOpenModal}
        sendTextObj={verifyIfNumbersMegaSena}
      />
      <div className="absolute top-[0] w-full bg-purple-800 pb-2 rounded-b-3xl">
        <div className="flex flex-col gap-1 sm:gap-2 mt-20">
          <div className="flex justify-center text-white text-xs mb-1 font-poppins font-medium sm:text-sm">
            <button
              onClick={() => copyNumbers(numbersQuina)}
              className="flex gap-1 items-center hover:border-dotted hover:border-b-2  hover:pb-[1px]"
            >
              <p>Copia Números</p>
              <CopySimple size={20} />
            </button>
          </div>
          <GenerateNumbers numbersArray={numbersQuina} typeGame="quina" />
          <GenerateNumbersButtons
            generateNumbersRandom={generateNumbersQuina}
            generateNumbersBest={() => selectRandomBestNumbers(bestNumbers, 5, 1)}
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
          quantityNumbers={80}
          numbersGenerates={numbersQuina}
          typeGame="quina"
        />
      </div>
      <br />
      <Footer actualPage="quina" />
    </main>
  );
};
