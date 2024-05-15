import '../components/reg-form.css'

export default function RegForm() {
    return(
        <div id='mbox'>
            <div id="reg-id">
            <h1 id="reg-text">Регистрация</h1>
            <input type="text" placeholder="Email" id="eml-reg"/>
            <input type="text" name="" id="pass-reg" placeholder="Пароль"/>
            <input type="text" placeholder="Подтвердите пароль" id="retr-pass-reg"/>
            <button id="but-reg">Зарегистрироваться</button>
        </div>
        </div>
    )
}