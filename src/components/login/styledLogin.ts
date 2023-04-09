import styled from "styled-components";

const Content = styled.div`
text-align: center;
background-color: #E5E5E5;
width: 100vw;
min-height: 110vh;
`
const Logotipo = styled.img`
position: absolute;
left: -5.72%;
right: 70.86%;
top: 4.92%;
bottom: 21.99%;
Width: 33%;
Height: 57%`

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
display: block;
text-align: center;
position: absolute;
left: 27%;
right: 0%;
top: 12.5%;
bottom: 0%;
background: ${({color}:props) => color};
height: 608px;
width: 40%;
border-radius: 16px;
box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
`
const FormData = styled.form`
text-align: left;
font-family: Roboto;
color:white;
width: 60%;
padding-left: 20%`

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
    Input,
    Login,
}