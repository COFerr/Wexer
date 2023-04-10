import Login from "./pages/login"
import S from "./components/app/StyledApp"
import greenLogo from "./assets/greenlogo.svg"
import mask from "./assets/Mask.svg"
import v1 from "./assets/Vector1.svg"
import v2 from "./assets/Vector2.svg"
import config from "./assets/Config.svg"
import users from "./assets/users.svg"
import Prontuario from "./pages/prontuario"


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
    <Prontuario></Prontuario>
    
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
