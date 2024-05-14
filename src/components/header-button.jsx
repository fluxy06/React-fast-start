import '../components/header-button-style.css'
import { useState } from 'react'



export default function HeaderButton({children}) {
    
    function InpClick() {

        if (children == 'Вход'){
            console.log('Вход')
        }

        if(children == 'Регистрация'){
            console.log('Регистрация')
        }
    }

    return(
        <div>
            <button id="headBut" onClick={InpClick}>{children}</button>
        </div>
    )
}