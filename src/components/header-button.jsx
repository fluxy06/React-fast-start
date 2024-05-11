import '../components/header-button-style.css'

export default function HeaderButton({children, onClick}) {
    return(
        <div>
            <button id="headBut" onClick={onClick}>{children}</button>
        </div>
    )
}