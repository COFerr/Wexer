import S from "../../components/app/StyledApp"
import greenLogo from "../../assets/images/greenlogo.svg"
import mask from "../../assets/images/Mask.svg"
import v1 from "../../assets/images/Vector1.svg"
import v2 from "../../assets/images/Vector2.svg"
import config from "../../assets/images/Config.svg"
import users from "../../assets/images/users.svg"
import { Outlet } from "react-router-dom"
import {useEffect, useState} from 'react'

function Layout() {
  return(

    <>
    <S.Flex>
      <S.Logo src={greenLogo} alt='logo'></S.Logo>
      <S.Around>
        <S.Mask src = {mask} alt="mask"/>
        <div><h2>Bem Vindo(a), {localStorage.getItem('name')}</h2></div>
      </S.Around>
    </S.Flex>
    <Outlet/>
    <S.LeftBar>
      <S.Mask src={v1} alt="vector"></S.Mask><br/>
      <S.Mask src={v2} alt="vector"></S.Mask><br/>
      <S.Mask src={config} alt="vector"></S.Mask><br/>
      <S.Mask src={users} alt="vector"></S.Mask><br/>
    </S.LeftBar>
    </>
    )
}

export default Layout