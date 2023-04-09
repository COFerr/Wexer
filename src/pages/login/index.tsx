import S from "../../components/login/styledLogin"
import logotipo from "../../assets/logotipo.svg"
import Modal from "../../components/login/Modal"
import { useState } from "react"
import logo from "../../assets/Logo.svg"
import LoginForm from "../../components/login/LoginForm"

function Login(): JSX.Element{
    const [color, setColor] = useState("#017849")
    return(
        <S.Content>
            <S.Logotipo src={logotipo}></S.Logotipo>
            <Modal boxColor={color}>
                <>
                    <S.Logomarca src={logo}></S.Logomarca>
                    <LoginForm></LoginForm>
                </>
            </Modal>
        </S.Content>
    )
}

export default Login
