import '../components/inp.css'
import { useState } from 'react'

export default function INPT() {
    const [act, setAct] = useState('my-input')
    const [eml, setEml] = useState(false)
    function Active() {
        if (act == 'my-input')
            {
                setAct('my-input2')
            }
    }
    function ChekEml() {
        if (eml.includes("@")){
            alert(`Почта успешно отправлена: \n${eml}`)
        }
        else if (eml.length <= 3) {
            alert('Количество символов недопустимо мало')
        }
        else{
            alert('Ошибка в почте нет символа @')
        }
    }

    function handleInputChange(event) {
        setEml(event.target.value); // обновляем состояние email при изменении ввода
    }

    return(
        <div className='group-info'>
            <input type="email" name="" id={act} placeholder='Введите ваш email' onClick={Active} value={eml} onChange={handleInputChange}/>
            <button id='inp-button' onClick={ChekEml}>Отправить</button>
        </div>
    )
}