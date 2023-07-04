import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { Modal, Flowbite, CustomFlowbiteTheme } from "flowbite-react";
import InputMask, { ReactInputMask } from "react-input-mask";
import { useNavigate } from "react-router-dom";

type TProps = {
  sendTextObj: () => { contem: boolean; text: string };
  activeModalName: "WhatsApp*" | "Telegram*" | undefined;
  setActiveModalName: React.Dispatch<
    React.SetStateAction<"WhatsApp*" | "Telegram*" | undefined>
  >;
};

export const TeAndWaModal = ({
  sendTextObj,
  activeModalName,
  setActiveModalName,
}: TProps) => {
  const [url, setUrl] = useState<string>("");
  const inputRef = useRef<ReactInputMask | null>(null);
  const navigate = useNavigate();

  const closeModal = () => {
    setActiveModalName(undefined);
    setUrl("");
  };

  const validNumbersTel = (tel: string) => {
    const telRegex = /\D/g;
    const formatTel = tel.replace(telRegex, "");

    if (formatTel.trim().length < 11) {
      toast.error("Error: preencha os 11 dígitos do seu número.", {
        toastId: "error-modal0*",
        position: "bottom-center",
      });
      return false;
    }

    return formatTel;
  };

  const selectedSendMessageApp = (tel: string) => {
    switch (activeModalName) {
      case "WhatsApp*":
        setUrl(`https://wa.me/55${tel}?text=${sendTextObj().text}`);
        break;
      case "Telegram*":
        toast.info("Ops :(.. Sem Telegram por em quanto.", {
          toastId: "info-modal-0*",
          position: "bottom-center",
        });
        break;
      default:
        setUrl("");
        break;
    }
  };

  const handleFormSubmit = async (event: any) => {
    event.preventDefault();
    const telValue = inputRef?.current?.value;

    if (telValue) {
      const tel = validNumbersTel(telValue);
      if (tel === false) {
        return;
      }

      selectedSendMessageApp(tel);
    }
  };

  const customTheme: CustomFlowbiteTheme = {
    modal: {
      root: {
        base: "fixed top-0 right-0 left-0 z-50 h-modal overflow-y-auto overflow-x-hidden md:inset-0 h-screen",
      },
    },
  };

  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Modal
        show={
          activeModalName === "WhatsApp*" || activeModalName === "Telegram*"
        }
        onClose={closeModal}
      >
        <Modal.Header>
          {/* <h6 className="font-poppins font-bold"> */}
            {activeModalName && activeModalName.toLocaleUpperCase()}
          {/* </h6> */}
        </Modal.Header>
        <Modal.Body>
          <div className="font-poppins">
            {sendTextObj().contem ? (
              <div>
                <h3 className="text-sm sm:text-base text-center font-normal">
                  Receba os números no seu aplicativo
                </h3>
                <h4 className="text-2xl text-center font-bold tracking-wide">
                  {sendTextObj().text}
                </h4>
              </div>
            ) : (
              <h3 className="text-base sm:text-xl text-center font-bold tracking-wide">
                {sendTextObj().text}
              </h3>
            )}
          </div>
          {sendTextObj().contem && (
            <form
              onSubmit={handleFormSubmit}
              className="flex flex-col gap-1 justify-center mt-2 font-normal tracking-wide"
            >
              <div className="flex flex-col">
                <label
                  className="text-sm sm:txt-base font-normal self-center"
                  htmlFor="tel"
                >
                  Digite seu número
                </label>
                <InputMask
                  ref={inputRef}
                  id="tel"
                  className="rounded-md"
                  type="tel"
                  placeholder="(00)00000-0000"
                  mask="(99) 99999-9999"
                  required
                />
              </div>
              <button
                type="submit"
                onDoubleClick={handleFormSubmit}
                // disabled={url.trim().length === 0}
                className="self-start border text-white bg-blue-600 hover:bg-blue-500/100 rounded-md px-3 py-0.5 "
              >
                {url.length > 1 && <a href={url}>Enviar</a>}
                {url.length > 1 ? "" : "Enviar"}
              </button>
            </form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={closeModal}
            type="button"
            className="self-start border text-white bg-red-600 hover:bg-red-500/100 rounded-md px-3 py-0.5 "
          >
            Cancelar
          </button>
        </Modal.Footer>
      </Modal>
    </Flowbite>
  );
};
