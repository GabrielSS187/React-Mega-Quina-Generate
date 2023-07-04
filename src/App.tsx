import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { Routes } from "./routes";
import { NavbarComponent } from "./shared/components/NavbarComponent";

const App = () => {
  return (
    <main className="pb-2 h-auto">
      <ToastContainer />
      <BrowserRouter>
        <NavbarComponent />
        <Routes />
      </BrowserRouter>
    </main>
  );
};

export default App;
