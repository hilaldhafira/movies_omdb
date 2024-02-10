import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import RootRouter from "./routes/RootsRouter";
import Navbar from "./components/Navbar/Navbar";
import ModalsConfirmation from "./components/Modals/ModalsConfirmation";
import ModalsCart from "./components/Modals/ModalsCart";

function App() {
  return (
    <>
    <ModalsConfirmation />
    <ModalsCart />
      <RouterProvider router={RootRouter} />
    </>
  );
}

export default App;
