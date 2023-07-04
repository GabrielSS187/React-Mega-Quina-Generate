import { GithubLogo } from "@phosphor-icons/react";

type TProps = {
  whatsApp: (params: string | undefined) => void;
  telegram: (params: string | undefined) => void;
  waParams: string | undefined;
  teParams: string | undefined;
}

export const SendNumbersButtons = ({ telegram, whatsApp, teParams, waParams }: TProps) => {
  return (
    <div className="flex items-center justify-center gap-1">
      <button onClick={() => whatsApp(waParams)}>
        <img
          src="/img/whatsapp.png"
          alt="WhatsApp Logo"
          className="w-[45px] sm:w-[55px]"
        />
      </button>
      <button className="pr-1.5 sm:pr-0" onClick={() => telegram(teParams)}>
        <img
          src="/img/telegram.png"
          alt="Telegram Logo"
          className="w-[32px] h-[32px] sm:w-[38px] sm:h-[38px] sm:mr-[8.5px]"
        />
      </button>
      <a href="https://github.com/GabrielSS187" target="_blank">
        <GithubLogo size={32} color="#fff5f5" />
      </a>
    </div>
  );
};
