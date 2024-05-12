import { useState } from "react";
import HeaderButton from "./components/header-button";
import Menu from "./components/menu";
import LOGO from './components/logo';
import MidBox from "./components/mid";
import INPT from "./components/inp";

// Определение функции Dropdown вне компонента App

export default function App() {
  return (
    <div>
      <div className="header">
        {/* Использование компонента Dropdown */}
        <LOGO></LOGO>
        <HeaderButton>Вход</HeaderButton>
        <HeaderButton>Регистрация</HeaderButton>
      </div>
      <div className="Mid-Box">
        <MidBox></MidBox>
        <INPT></INPT>
      </div>
    </div>
  );
}
