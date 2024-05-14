import { useState } from "react";
import HeaderButton from "./components/header-button";
import Menu from "./components/menu";
import LOGO from './components/logo';
import MidBox from "./components/mid";
import INPT from "./components/inp";
import ICN from "./components/icons";
import Bottom from "./components/bottom";
// Определение функции Dropdown вне компонента App

export default function App() {
  return (
    <div>
      <div className="header">
        {/* Использование компонента Dropdown */}
        <img src="src\components\Illustration_1pep.png" alt="" id="back-img"/>
        <LOGO></LOGO>
        <HeaderButton>Вход</HeaderButton>
        <HeaderButton>Регистрация</HeaderButton>
      </div>
      <div className="Mid-Box">
        <MidBox></MidBox>
        <INPT></INPT>
        <ICN></ICN>
      </div>
      <div id="BottomBox">
        <Bottom></Bottom>
      </div>
    </div>
  );
}
