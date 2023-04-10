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
background: rgba(0,0,0,0.3);
`

const ContainerModalProntuario = styled.div `
position: absolute;
left: 418px;
top: 97px;
width: ${({service}:props) => service !== "Serviço" ? '674px' : '444px' };
padding: 24px 28px 24px 32px;
background: #FFFFFF;
border-radius: 8px;
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
    > .green{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 170%;
        /* or 27px */
        /* Primária (Verde)/Verde Wexer */
        color: #00995D;
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
    > select{
        height: 48px;
        width: 100%;
        /* Branco */
        background: #FFFFFF;
        /* Gray 4 */
        border: 1px solid #BDBDBD;
        border-radius: 8px;
        background: linear-gradient(0deg, #FFFFFF, #FFFFFF),
        linear-gradient(0deg, #BDBDBD, #BDBDBD);
    }
    >textarea{
        /* Branco */
        background: #FFFFFF;
        /* Gray 4 */
        border: 1px solid #BDBDBD;
        border-radius: 8px;
        /* Inside auto layout */
        flex: none;
        order: 1;
        flex-grow: 0;
        height: 115px;
        width: 379px;
    }
    > div{
        display: flex;
        justify-content: space-between;
        align-items: center;

        > h2{
            margin: 0px;
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
    }
`



export default{
    ModalProntuario,
    ContainerModalProntuario,
}