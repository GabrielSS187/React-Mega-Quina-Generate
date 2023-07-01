import {
  Routes as RoutesContent, Route
} from "react-router-dom";
import { ReactElement } from "react";

import { SenaPage } from "../pages/Sena-page";
import { QuinaPage } from "../pages/Quina-page";

type TLink = {
  path: string;
  element: ReactElement;
}

export const Routes = () => {
  const routers: TLink[] = [
    {
      path: "/sena",
      element: <SenaPage />,
    },
    {
      path: "/quina",
      element: <QuinaPage />,
    },
  ];

  return (
    <>
      <RoutesContent>
        {
          routers.map((route) => {
            return <Route key={route.path} path={route.path} element={route.element} />
          })
        }
      </RoutesContent>
    </>
  )
}; 