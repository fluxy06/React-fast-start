import { useState } from "react";
import HeaderButton from "./components/header-button";
import Menu from "./components/menu";
import LOGO from './components/logo';

// Определение функции Dropdown вне компонента App

export default function App() {
  return (
    <div>
      <div className="header">
        {/* Использование компонента Dropdown */}
        <LOGO></LOGO>
        <HeaderButton>Вход</HeaderButton>
      </div>
    </div>
  );
}
