import { BrowserRouter } from "react-router-dom";

import { Routes } from "./routes";
import { NavbarComponent } from "./shared/components/NavbarComponent";

const App = () => {
  return (
    <main className="pb-2 h-auto">
      <BrowserRouter>
        <NavbarComponent />
        <Routes />
      </BrowserRouter>
    </main>
  );
};

export default App;
