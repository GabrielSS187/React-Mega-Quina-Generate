type TProps = {
  actualPage: "sena" | "quina";
};

export const Footer = ({ actualPage }: TProps) => {
  const currentDate = String(new Date().getFullYear());

  const selectedBgFooter = () => {
    switch (actualPage) {
      case "sena":
        return "bg-green-500";
      case "quina":
        return "bg-purple-800";
      default:
        break;
    }
  };

  return (
    <footer className={`${selectedBgFooter()} fixed bottom-0 w-full text-white text-sm h-8 font-po text-center pt-1.5 sm:text-base sm:p-1`}>
      Feito por: <strong>Gabriel Silva</strong>, em: <strong>{ currentDate }</strong>
    </footer>
  )
}