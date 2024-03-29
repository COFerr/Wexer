import styled from "styled-components";

const Content = styled.div`
text-align: center;
background-color: #E5E5E5;
width: 100vw;
min-height: 110vh;

a{
    margin-top: 25px;
    /* montserrat 18 */
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    display: flex;
    align-items: center;
    text-align: center;
    /* Branco */
    color: #FFFFFF;
}
`
const Logotipo = styled.img`
position: absolute;
left: -5.72%;
right: 70.86%;
top: 16px;
bottom: 21.99%;
Width: 33%;
Height: 75%`

const Logomarca = styled.img`
height: 127.42px;
width: 321.02px;
padding-top: 77.5px;
border-radius: 0px;
`

type props = {
    color: string;
}
const GreenBox = styled.div`
text-align: center;
position: relative;
left: 27%;
right: 0%;
margin-top: -100px;
bottom: 0%;
background: ${({color}:props) => color};
height: 608px;
width: 40%;
border-radius: 16px;
box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);

div{
    display: flex;
    justify-content: center;
    flex-direction: column;

    >span{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        color: #00995D;
    }
    >p{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        color: #00995D;
    }
    a{
        /* montserrat 18 */
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        display: flex;
        align-items: center;
        justify-content: center;
        /* Branco */
        color: #FFFFFF;
    }
}
`

const FormData = styled.form`
text-align: left;
font-family: Roboto;
color: white;
width: 60%;
padding-left: 20%`

const RegisterData = styled.form`
text-align: left;
font-family: Roboto;
color: 'black';
width: 60%;
padding-left: 20%;

div{
    display: flex;
    align-items: flex-end;
}
`

const Continue = styled.button`
box-sizing: border-box;
text-algin: center;
background: #00995D;
width: 50%;
height: 48px;
/* Branco */
color: white;
border: 1px solid #FFFFFF;
border-radius: 24px;
margin-top: 31px;`

const Input = styled.input`
box-sizing: border-box;
width: 100%;
height: 48px;
border-radius: 8px;
margin-bottom: 18px;
/* Branco */
background: #FFFFFF;
/* Gray 4 */
border: 1px solid #BDBDBD;
border-radius: 8px;`

const Login = styled.button`
box-sizing: border-box;
text-algin: center;
background-color: Transparent;
width: 100%;
height: 48px;
/* Branco */
color: white;
border: 1px solid #FFFFFF;
border-radius: 24px;
margin-top: 31px;`

export default {
    Content,
    Logotipo,
    Logomarca,
    GreenBox,
    FormData,
    RegisterData,
    Continue,
    Input,
    Login,
}