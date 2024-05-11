import '../components/logo.css'
import { useState } from 'react'
import Menu from "../components/menu";
const lg = 'logo1'

export default function LOGO() {
    const [act, setAct] = useState(lg)
    const [showMenu, setShowMenu] = useState(false);

    function logoClick() {
        if (act == lg) {
            setAct('logo2')
            setShowMenu(true);
        }else if (act == 'logo2')
            {
                setAct(lg)
                setShowMenu(false);
            }
    }

    return(
        <div>
            <img id={act} src="src\components\oval.png" alt="" onClick={logoClick} />
            <div className={showMenu ? "menu-container show" : "menu-container"}>
                <Menu />
            </div>
        </div>
    )
}