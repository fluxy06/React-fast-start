import '../components/inp.css'

export default function INPT() {
    return(
        <div className='group-info'>
            <input type="email" name="" id="my-input" placeholder='Введите ваш email'/>
            <button id='inp-button'>Отправить</button>
        </div>
    )
}