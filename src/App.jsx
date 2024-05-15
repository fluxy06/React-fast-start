import { useState } from "react";
import HeaderButton from "./components/header-button";
import Menu from "./components/menu";
import LOGO from './components/logo';
import MidBox from "./components/mid";
import INPT from "./components/inp";
import ICN from "./components/icons";
import Bottom from "./components/bottom";
import LoginForm from "./components/form-input";
import RegForm from "./components/registerForm";


export default function App() {
  const [curScr, setCurScr] = useState('home');

  function handleHeaderButtonClick(screen) {
    setCurScr(screen);
  }

  function renderContent() {
    if (curScr === 'login') {
      return (
        <div id="boxX">
          <LoginForm></LoginForm>
        </div>
      );
    }

    else if (curScr === 'register') {
      return (
        <div>
          <RegForm></RegForm>
        </div>
      );


    } 
    else if (curScr === 'main') {
      return(
        <>
        <div className="Mid-Box">
            <MidBox />
            <INPT />
            <ICN />
          </div>
          <div id="BottomBox">
            <Bottom />
          </div>
        </>
      )
    }
    else {
      return (
        <>
          <div className="Mid-Box">
            <MidBox />
            <INPT />
            <ICN />
          </div>
          <div id="BottomBox">
            <Bottom />
          </div>
        </>
      );
    }
  }

  return (
    <div>
      <div className="header">
        <LOGO />
        <HeaderButton onClick={handleHeaderButtonClick}>Главная</HeaderButton>
        <HeaderButton onClick={handleHeaderButtonClick}>Вход</HeaderButton>
        <HeaderButton onClick={handleHeaderButtonClick}>Регистрация</HeaderButton>
      </div>
      {renderContent()}
    </div>
  );
}
