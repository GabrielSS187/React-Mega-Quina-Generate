import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export const NavbarComponent = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/sena");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav>
      <ul>
       <li>
          <NavLink
            to="/sena"
            className={({ isActive }) => isActive ? "bg-green-500" : ""}
          >
            Mega-Sena
          </NavLink>
       </li>
       <li>
          <NavLink
            to="/quina"
            className={({ isActive }) => isActive ? "bg-blue-500" : ""}
          >
            Quina
          </NavLink>
       </li>
      </ul>
    </nav>
  );
}