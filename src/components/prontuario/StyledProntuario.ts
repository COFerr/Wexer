import styled from "styled-components";

const ContainerBox = styled.div`
padding-top: 90px;
padding-left: 138px;
padding-right: 84px;
display: flex;
justify-content: space-around;
alig-items: flex-start;
flex-wrap: wrap;`


type props = {
    prontuario: boolean;
}
const TaskBar = styled.div`
position: absolute;
top: 90px;
left: 138px;
width: 1256px;
height: 69px;
display: flex;
justify-content: space-between;
align-items: center;
/* BRANCO */
background: #FFFFFF;
border-radius: 8px;
padding: 8px 24px 8px 8px;

& div{
    display: flex;
}

& .search{
    /* Branco */
    background: #FFFFFF;
    /* Tons de cinza/Cinza 300 */
    border: 1px solid #E0E0E0;
    border-radius: 8px;
    justify-content: space-between;
    align-items: center;
    width: 386px;
    height: 48px;
    padding-right: 24px;
    padding-left:16px;

    & > input{
        border: none;
        width:100%;
    }
    & > input::placeholder{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        /* identical to box height */
        display: flex;
        align-items: center;
        /* Tons de cinza/Cinza 500 */
        color: #9E9E9E;
    }

    & > input:focus{
        box-shadow: 0 0 0 0;
        outline: 0;
        border: none;
    }
    & > img{
        height: 20.31px;
        width: 20.31px;
        border-radius: 0px;
    }
}

& .prontuario{
    font-family: 'Comfortaa';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    /* Tons de cinza/Cinza 300 */
    color: ${({prontuario}:props) => prontuario ?  '#017849' : '#E0E0E0'};
    border: 1px solid #F2F2F2;
    border-bottom: ${({prontuario}:props) => prontuario ?  '1px solid #017849' : '1px solid #F2F2F2'};
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
    width: 251px;
    height: 36px;
    cursor: pointer;
}

& .dados{
    font-family: 'Comfortaa';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    /* Tons de cinza/Cinza 300 */
    color: ${({prontuario}:props) => prontuario ? '#E0E0E0'  :  '#017849'};
    border: 1px solid #F2F2F2;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
    border-bottom: ${({prontuario}:props) => prontuario ? '1px solid #F2F2F2' :  '1px solid #017849'};
    width: 251px;
    height: 36px;
    cursor: pointer;
}
`

const InfoPosition = styled.div`
position: relative;
margin-top: 93px;
width: 340px`

const Info = styled.div`
border: 1px solid #E0E0E0;
background-color:  #FFFFFF;
box-sizing: border-box;
box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
border-radius: 8px;
margin-bottom: 16px;
padding-bottom: 16px;
padding-top: 24px;
width: 100%;

& > div{
    display: flex;
    justify-content: space-between;
    margin-left: 24px;
    margin-right: 16px;

    & > span{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        padding-bottom: 23px;
    }

    & > img{
        /* novo */
        cursor: pointer;
        box-sizing: border-box;
        /* Auto layout */
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 4px 8px;
        gap: 10px;
        width: 32px;
        height: 24px;
        /* Branco */
        background: #FFFFFF;
        /* Primária (Verde)/verde mais forte */
        border: 1px solid #017849;
        /* tag */
        box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.15);
        border-radius: 8px;
    }
}
& > span{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    padding-bottom: 23;
    margin-left: 24px;
}
& h5{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 170%;
    /* or 27px */
    /* Tons de cinza/Cinza 700 */
    color: #616161;
    margin: 0 0 0 48px;
}

& h4 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 170%;
    /* or 27px */
    /* Tons de cinza/Cinza 700 */
    color: #616161;
    margin: 24px 27px 21px 24px;
}

& > p{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 170%;
    color: #00995D;
    margin: 16px 0 0 24px;
}`

const ServicePosition = styled.div`
position: relative;
margin-top: 93px;
margin-bottom: 61px;
margin-left: 24px;
width: 924px;

.splitter{
    display: flex;
    align-items: center;
    div{
        display: block;
    }
    hr{
        width: 770px;
        height: 1px;
        margin-top: 25px;
    }
    p{
        margin-bottom:0;
    }
    /* 14 px medium */
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */
    /* Tons de cinza/Cinza 600 */
    color: #757575;
    margin: 0;
    padding: 0;
}

.session{
    z-index: 1;
    display: flex;
    position: absolute;
    width: 4px;
    left: 45px;
    background-color: #00995D;
    color: #00995D;
    padding-bottom: 20px;
    
    hr{
        width: 2px;
        height: 5px;
    }
}

.fact{
    display: flex;
    position: absolute;
    width: 4px;
    left: 45px;
    background-color: #2F80ED;
    color: #2F80ED;
    padding-bottom: 20px;
    
    hr{
        width: 2px;
        height: 5px;
        
    }
}
.attachment{
    display: flex;
    position: absolute;
    width: 4px;
    left: 45px;
    background-color: #9D28AC;
    color: #9D28AC;
    padding-bottom: 20px;
    
    hr{
        width: 2px;
        height: 5px;
        
    }
}

.eval{
    display: flex;
    position: absolute;
    width: 4px;
    left: 45px;
    background-color: #EA1E61;
    color: #EA1E61;
    padding-bottom: 20px;
    padding-top: 20px;
    hr{
        width: 2px;
        height: 5px;
        
    }
}`

const AddService = styled.div`
box-sizing: border-box;
width: 100%;
height: 176px;
/* Branco */
background: #FFFFFF;
/* Tons de cinza/Cinza 300 */
border: 1px solid #E0E0E0;
/* Sombra 1 */
box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
border-radius: 8px;
padding: 24px;

div{
    height: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Montserrat';

    span {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        /* identical to box height */
        display: flex;
        align-items: center;
        /* Tons de cinza/Cinza 900 */
        color: #212121;
    }

    select{
        width: 495px;
        height: 48px;
        background: #FFFFFF;
        /* Tons de cinza/Cinza 300 */
        border: 1px solid #E0E0E0;
        border-radius: 8px;
        margin-right: 24px;
        padding-left: 16px;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 170%;
        /* Tons de cinza/Cinza 700 */
        color: #616161;

        option {
            /* montserrat 16 */
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 170%;
            /* or 27px */
            display: flex;
            align-items: center;
            /* Tons de cinza/Cinza 700 */
            color: #616161;
        }
    }

    > img {
        cursor: pointer;
        box-sizing: border-box;
        /* Auto layout */
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 4px 8px;
        gap: 10px;
        width: 32px;
        height: 24px;
        /* Branco */
        background: #FFFFFF;
        /* Primária (Verde)/verde mais forte */
        /* tag */
        box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.15);
        border-radius: 8px;
    }

    .edit{
        border: 1px solid #017849;
    }

    .red{
        border: 1px solid #EB5757;
    }

    a{
        text-decoration: none;
        cursor: pointer;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        /* identical to box height */
        display: flex;
        align-items: center;
        /* Tons de cinza/Cinza 900 */
        color: #212121;
         
        > img {
            box-sizing: border-box;
            /* Auto layout */
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin-right: 12px;
            height: 29px;
            width: 24px;
        }    
    }
}`

export default {
    ContainerBox,
    TaskBar,
    Info,
    InfoPosition,
    ServicePosition,
    AddService,
}
