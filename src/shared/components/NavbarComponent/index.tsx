import { useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { Dropdown, Flowbite } from "flowbite-react";

export const NavbarComponent = () => {
  const navigate = useNavigate();
  const actualPath = useLocation().pathname;

  useEffect(() => {
    navigate("/sena");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav className="ml-3 mt-2">
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
