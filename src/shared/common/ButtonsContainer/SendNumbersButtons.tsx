export const SendNumbersButtons = () => {
  return (
    <div className="flex items-center justify-center">
      <button>
        <img
          src="/img/whatsapp.png"
          alt="WhatsApp Logo"
          className="w-[45px] sm:w-[55px]"
        />
      </button>
      <button>
        <img
          src="/img/telegram.png"
          alt="Telegram Logo"
          className="w-[32px] h-[32px] sm:w-[38px] sm:h-[38px] sm:mr-[8.5px]"
        />
      </button>
    </div>
  );
};
