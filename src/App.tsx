import S from "./components/app/StyledApp"
import greenLogo from "./assets/images/greenlogo.svg"
import mask from "./assets/images/Mask.svg"
import v1 from "./assets/images/Vector1.svg"
import v2 from "./assets/images/Vector2.svg"
import config from "./assets/images/Config.svg"
import users from "./assets/images/users.svg"
import Login from "./pages/login"
import Prontuario from "./pages/prontuario"
import AvaliacaoPsicologica from "./pages/avaliacaopsicologica"


function App() {
  return(
    <>
    <S.Flex>
      <S.Logo src={greenLogo} alt='logo'></S.Logo>
      <S.Around>
        <S.Mask src = {mask} alt="mask"/>
        <div><h2>Bem Vindo(a), Psicólogo</h2></div>
      </S.Around>
    </S.Flex>
    <AvaliacaoPsicologica/>
    <S.LeftBar>
      <S.Mask src={v1} alt="vector"></S.Mask><br/>
      <S.Mask src={v2} alt="vector"></S.Mask><br/>
      <S.Mask src={config} alt="vector"></S.Mask><br/>
      <S.Mask src={users} alt="vector"></S.Mask><br/>
    </S.LeftBar>
    </>
    )
}

export default App
