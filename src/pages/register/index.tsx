import S from "../../components/login/styledLogin";
import logotipo from "../../assets/images/logotipo.svg";
import Modal from "../../components/login/Modal";
import { useState } from "react";
import logo from "../../assets/images/darklogo.svg";
import FormRegister from "../../components/register/FormRegister";
import { Link } from "react-router-dom";

type phase = 'name' | 'password'
function Register(): JSX.Element {
    const[phase, setPhase] = useState<phase>('name')
  const [color, setColor] = useState("#FFFFFF");
  return (
    <S.Content>
      <S.Logotipo src={logotipo}></S.Logotipo>
      <Modal boxColor={color}>
        <>
          <S.Logomarca src={logo}></S.Logomarca>
          <div>
            <span>Seja Bem-Vindo(a)</span>
            <p>Preencha os campos para se cadastrar</p>
          </div>
          <FormRegister></FormRegister>
        </>
      </Modal>
    </S.Content>
  );
}

export default Register;
