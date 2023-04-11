import styled from "styled-components";

type props = {
    service: 'Sessão' | 'Fato relevante' | 'Anexo' | 'Avaliação Psicológica' | "Anotações Pessoais" | "Serviço" |'';
}

const ModalProntuario = styled.div`
display: ${({service}:props) => service === "" ? 'none' : 'block' };
position: absolute;
top: 0;
left: 0;
z-index: 901;
width: 100vw;
min-height: 150vh;
background: rgba(0,0,0,0.4);
`

const ContainerModalProntuario = styled.div `
position: absolute;
left: 418px;
top: 97px;
width: ${({service}:props) => service !== "Serviço" ? '674px' : '444px' };
padding: 24px 28px 24px 32px;
background: #FFFFFF;
border-radius: 8px;
    
    > .green{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 170%;
        /* or 27px */
        /* Primária (Verde)/Verde Wexer */
        color: #00995D;
        margin: 12px 0 0 0;
    }
    p{
        margin:0;
    }
    .atention{
        display: block;
        /* montserrat 16 */ 
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        padding: 16px 70px 16px 16px;
        line-height: 170%;
        margin-top: 32px;
        margin-bottom: 42px;
        background: #C5F2E0;
        border-radius: 8px;
        /* or 27px */
        /* Tons de cinza/Cinza 900 */
        color: #212121;

        span{
            /* montserrat  16 bold */
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 20px;
            /* identical to box height */
            display: flex;
            align-items: center;
            /* Primária (Verde)/Verde Wexer */
            color: #00995D;
        }
    }
    
    .flexleft{
        justify-content: left;
        align-items: baseline;

        > span{
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 22px;
            width: 32px;
            height: 32px;
            margin: 24px 8px 16px 0px;
            border-radius:50%;
            /* identical to box height */
            display: flex;
            align-items: center;
            justify-content:center;
            /* Branco */
            color: #FFFFFF;
            background: #00995D;
        }
    }
    > p{
        /* montserrat 18 */
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        /* identical to box height */
        /* Tons de cinza/Cinza 700 */
        color: #616161;
    }
    >label{
        /* montserrat 14 */
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        display: flex;
        align-items: center;
        margin-top: 16px;
        /* Gray 2 */
        color: #4F4F4F;
    }
    > input{
        width: 100%;
        height: 48px;
        /* Branco */
        background: #FFFFFF;
        /* Gray 4 */
        border: 1px solid #BDBDBD;
        border-radius: 8px;
    }
    .file{
        border: none;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 8px;

        height: 34px;
        /* Sistema/Azul */
        background: #2F80ED;
        border-radius: 8px;
        /* Inside auto layout */
        flex: none;
        order: 0;
        flex-grow: 0;
    }
    > textarea{
        padding: 14px 18px;
        margin-top:12px;
        box-sizing: border-box;
        width: 100%;
        height: 153px;
        /* Branco */
        background: #FFFFFF;
        /* Gray 4 */
        border: 1px solid #BDBDBD;
        border-radius: 8px;
        /* Inside auto layout */
        flex: none;
        order: 1;
        flex-grow: 0;
    }

    > select{
        height: 53px;
        width: 100%;
        /* Branco */
        background: #FFFFFF;
        /* Gray 4 */
        border: 1px solid #BDBDBD;
        border-radius: 8px;
        background: linear-gradient(0deg, #FFFFFF, #FFFFFF),
        linear-gradient(0deg, #BDBDBD, #BDBDBD);
    }
    > div{
        display: flex;
        justify-content: space-between;
        align-items: center;

        a{
            cursor: pointer;
        }
        label{
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            display: flex;
            align-items: center;
            /* Gray 2 */
            color: #4F4F4F;
        }
        .data{
            box-sizing: border-box;
            /* Branco */
            background: #FFFFFF;
            /* Gray 4 */
            border: 1px solid #BDBDBD;
            border-radius: 8px;
            height: 48px;
            width: 182px;
        }
        .title{
            box-sizing: border-box;
            width: 450px;
            height: 48px;
            /* Branco */
            background: #FFFFFF;
            /* Gray 4 */
            border: 1px solid #BDBDBD;
            border-radius: 8px;
            /* Inside auto layout */
            flex: none;
            order: 1;
            flex-grow: 0;
        }

        > h2{
            margin: 0px;
            margin-bottom: 24px;
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            line-height: 29px;
            display: flex;
            align-items: center;
            /* Primária (Verde)/Verde Wexer */
            color: #00995D;
        }
        > p{
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 22px;
            /* identical to box height */
            display: flex;
            align-items: center;
            /* Tons de cinza/Cinza 900 */
            color: #212121;
        }
    }

    > footer{
        width: 100%;
        height: 97px;
        /* Branco */
        background: #FFFFFF;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 2px solid #E0E0E0;

        div{
            display: flex;
            justify-content: center;
            algin-items: baseline;
            gap: 24px;
        }
        .cancel{
            cursor: pointer;
            /* comfortaa 16 bold */
            font-family: 'Comfortaa';
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 18px;
            /* identical to box height */
            display: flex;
            align-items: center;
            text-align: center;
            /* Tons de cinza/Cinza 700 */
            color: #616161;
        }
        
        .confirm{
            height: 48px;
            width: 147px;
            border-radius: 24px;
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            /* Branco */
            color: #FFFFFF;
            /* Primária (Verde)/Verde Wexer */
            background: #00995D;
        }
        >div{
            >p{
                width: 161px;
                height: 20px;
                font-family: 'Poppins';
                font-style: italic;
                font-weight: 400;
                font-size: 14px;
                line-height: 140%;
                /* identical to box height, or 20px */
                letter-spacing: 0.2px;
                /* Cinzas/Cinza 700 */
                color: #616161;
            }
        }
    }
    button{
        background: #00995D;
        border-radius: 24px;
        width: 100%;
        height: 48px;
        display: flex;
        justify-content: center;
        align-items:center;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        display: flex;
        align-items: center;
        text-align: center;
        margin-top: 25px;
        /* Branco */
        color: #FFFFFF;

    }
`



export default{
    ModalProntuario,
    ContainerModalProntuario,
}