import '../components/header-button-style.css'
import { useState } from 'react'



export default function HeaderButton({children, onClick}) {
    const [inp, setInp] = useState(false)
    function InpClick() {

        if (children == 'Вход'){
            onClick('login')
        }

        if(children == 'Регистрация'){
            onClick('register')
        }
    }

    return(
        <div>
            <button id="headBut" onClick={InpClick}>{children}</button>
        </div>
    )
}