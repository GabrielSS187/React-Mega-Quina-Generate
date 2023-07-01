import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import { Routes } from "./routes";
import { NavbarComponent } from "./shared/components/NavbarComponent";

// const useApp = () => {
//   const navigate = useNavigate();

//   return { navigate }
// };

const App = () => {
  return (
    <main>
      <BrowserRouter>
        <NavbarComponent />
        <Routes />
      </BrowserRouter>
    </main>
  );
};

export default App;
