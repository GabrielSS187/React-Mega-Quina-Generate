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

const useQuinaPage = () => {
  const [numbersQuina, setNumbersQuina] = useState<number[]>([
    0o0, 0o0, 0o0, 0o0, 0o0,
  ]);
  const [openModal, setOpenModal] = useState<
    "WhatsApp*" | "Telegram*" | undefined
  >(undefined);
  const [value, setCopy] = useCopyToClipboard();

  const generateNumbersQuina = (): void => {
    let numbers: number[] = [];
    while (numbers.length < 5) {
      const number = Math.floor(Math.random() * 80) + 1;
      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }
    setNumbersQuina(numbers);

    setTimeout(() => {
      window.scrollTo({ behavior: "smooth", top: 300 });
      toast.success(`Números gerados com sucesso.`, {
        toastId: "success-quina-0*",
        position: "bottom-center",
      });
    }, 5000);
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
    copyNumbers,
    openModal,
    setOpenModal,
    verifyIfNumbersMegaSena,
  };
};

export const QuinaPage = () => {
  const {
    generateNumbersQuina,
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
            generateNumbersBest={generateNumbersQuina}
          />
          <SendNumbersButtons
            whatsApp={() => setOpenModal("WhatsApp*")}
            telegram={() => setOpenModal("Telegram*")}
            waParams={openModal}
            teParams={openModal}
          />
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
