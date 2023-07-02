import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Dropdown, Flowbite } from "flowbite-react";


export const NavbarComponent = () => {
  const navigate = useNavigate();
  const actualPath = useLocation().pathname;

  useEffect(() => {
    navigate("/sena");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectedImageByTypeGame = () => {
    switch (actualPath) {
      case "/sena":
        return { path: "/img/logo-mega-banner.png", color:  "bg-green-500"};
      case "/quina":
        return { path: "/img/logo-quina-banner.png", color:  "bg-purple-800"};
      default:
        return { path: "/img/logo-mega-banner.png", color:  "bg-green-500"};
    }
  };

  return (
    <nav className="relative z-50 flex flex-row-reverse items-center justify-between mt-2 mx-3">
      <img src={`${selectedImageByTypeGame().path}`} alt="logo" className={`w-[150px] ${selectedImageByTypeGame().color}`} />
      <Flowbite>
        <Dropdown label="JOGOS" gradientDuoTone="pinkToOrange">
          <Dropdown.Item>
            <ul className="flex flex-col gap-3 text-base font-poppins font-bold tracking-wide" tabIndex={1}>
              <li
                onClick={() => navigate("/sena")}
                className={`${
                  actualPath === "/sena" &&
                  "rounded-md border-solid border border-green-500 p-2"
                } flex items-center gap-1 hover:rounded-md hover:border-solid hover:border hover:border-green-500 hover:p-2`}
              >
                <img
                  src="/img/mega-sena-logo.png"
                  alt="Mega Sena Logo"
                  className="w-[40px] h-[40px]"
                />
                <span>Mega-Sena</span>
              </li>
              <li
                onClick={() => navigate("/quina")}
                className={`${
                  actualPath === "/quina" &&
                  "rounded-md border-solid border border-blue-500 p-2"
                } flex items-center gap-1 hover:rounded-md hover:border-solid hover:border hover:border-blue-500 hover:p-2`}
              >
                <img
                  src="/img/quina-logo.png"
                  alt="Quina Logo"
                  className="w-[36px] h-[36px]"
                />
                <span>Quina</span>
              </li>
            </ul>
          </Dropdown.Item>
        </Dropdown>
      </Flowbite>
    </nav>
  );
};
