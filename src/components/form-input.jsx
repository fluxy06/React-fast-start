import '../components/LoginForm.css'
import { useState } from 'react'



export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const validEmail = "kitsorokin115@gmail.com";
    const validPassword = "kit1218!"

    function Chek() {
        if (email == '' || password == '') {
            alert('Логин или пароль пустые')
        }else if (email == validEmail && password == validPassword){
            alert('Вы успешно вошли')
        }else{
            alert('Логин не совпал или пароль не совпал')
        }
    }

    return(
        <div id="loginBox">
            <h1 id="loginText">Вход</h1>
            <input type="text" placeholder="Email" id="emLogin" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="Пароль" id="emPassword" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button id="loginButton" onClick={Chek}>Войти</button>
        </div>
    )
}