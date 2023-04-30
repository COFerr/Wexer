import S from "../../components/login/styledLogin";
import logotipo from "../../assets/images/logotipo.svg";
import Modal from "../../components/login/Modal";
import { useState } from "react";
import logo from "../../assets/images/Logo.svg";
import LoginForm from "../../components/login/LoginForm";
import { Link } from "react-router-dom";
import { loginService } from "../../components/services/login-service";


function Login(): JSX.Element {
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')
  const [error, setError] = useState('')
  const login = async (event: React.MouseEvent) => {
    event.preventDefault()
    try {
      const response = await loginService({ email, password })
  
      localStorage.setItem('token', response.token)
  
    } catch (er) {
      if (er instanceof Error) {
        setError(er?.message)
        return
      }
      setError('Deu erro')
    }
  }
  const [color, setColor] = useState("#017849");
  return (
    <S.Content>
      <S.Logotipo src={logotipo}></S.Logotipo>
      <Modal boxColor={color}>
        <>
          <S.Logomarca src={logo}></S.Logomarca>
          <LoginForm></LoginForm>
          <div><Link to='/register'>Cadastre-se gratuitamente</Link></div>
        </>
      </Modal>      
    </S.Content>
  );
}

export default Login;
