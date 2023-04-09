import { useState } from "react";
import S from "./styledLogin"

type props = {
    children: JSX.Element;
    boxColor: string
}

function Modal({children, boxColor}: props):JSX.Element{ 

    return(
        <S.GreenBox color = {boxColor}>{children}</S.GreenBox>
    )
}

export default Modal