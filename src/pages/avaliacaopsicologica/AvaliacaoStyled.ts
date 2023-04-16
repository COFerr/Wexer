import styled from "styled-components";
import initialbreadcrumb from "../../assets/initialbreadcrumb.svg"
import middlebreadcrumb from "../../assets/middlebreadcrumb.svg"
import lastbreadcrumb from "../../assets/lastbreadcrumb.svg"

const TopBar = styled.div`
position: absolute;
width: 1464px;
height: 48px;
left: 80px;
top: 65px;
background: #FFFFFF;
border-radius: 16px;
padding-left: 16px;

/* montserrat 16 */
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
/* identical to box height */
display: flex;
align-items: center;
/* Gray 2 */
color: #4F4F4F;
/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;

span{
    font-weight: 700;
}`

const BreadCrumbs = styled.div`
position: absolute;
top: 168px;
left: 117px;
width: 1131px;
display: flex;
justify-content: space-between;
img{
    width: 370px;
}
`

const BreadCrumbLabels = styled.div`
position: absolute;
z-index:2;
top: 169px;
left: 117px;
width: 1131px;
height: 73px;
display: flex;
justify-content: space-between;
align-items: center;

p{
    width: 390px;
    text-align:center;
    /* montserrat 18 */
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */
    /* Primária (Verde)/verde mais forte */
    color: #017849;
    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 1;
}
`

const Container = styled.div`
/* Rectangle 284 */
position: relative;
z-index: 2;
width: 1131px;
height: 6400px;
left: 117px;
top: 314px;
/* Branco */
background: #FFFFFF;
border-radius: 16px;`

const Head = styled.div`
height: 75px;
width: 100%;
border-radius: 20px;
border-left: 6px solid #00995D;
border-bottom: 2px solid #F2F2F2;
display: flex;
justify-content: space-between;
align-items: center;

h1{
    /* Entrevista */
    margin-left: 28px;
    /* montserrat 24 */
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    display: flex;
    align-items: center;
    /* Primária (Verde)/verde mais forte */
    color: #017849;
}

.fill-button{
    /* btn */
    /* Auto layout */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 12px 0px 20px;
    gap: 23px;
    position: absolute;
    width: 182px;
    height: 48px;
    left: 745px;
    top: 13px;
    /* Primária (Verde)/Verde Wexer */
    background: #00995D;
    /* tag */
    box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.15);
    border-radius: 24px;

    /* montserrat  16 bold */
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: center;
    text-align: center;
    /* Branco */
    color: #FFFFFF;
    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 0;
}

.border-button{
    box-sizing: border-box;
    /* Auto layout */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 12px 0px 24px;
    gap: 13px;
    position: absolute;
    width: 164px;
    height: 48px;
    left: 943px;
    top: 14px;
    /* Primária (Verde)/Verde Wexer */
    border: 1px solid #00995D;
    border-radius: 24px;

    /* montserrat  16 bold */
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: center;
    text-align: center;
    /* Primária (Verde)/Verde Wexer */
    color: #00995D;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
}`

const InterviewResume = styled.div`
width: 965px;

div{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

textarea{
    * input/ form */
    box-sizing: border-box;
    width: 900px;
    height: 149px;
    padding: 25px;
    /* Branco */
    background: #FFFFFF;
    /* Gray 4 */
    border: 1px solid #BDBDBD;
    border-radius: 8px;
    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 0;
    /* montserrat 14 */
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    color: #C2C2C2;
}`

const QuestionsBox = styled.div`
margin-left:28px;
margin-top: 100px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
/* input/ form */
box-sizing: border-box;
width: 959px;
height: 149px;
/* Branco */
background: #FFFFFF;
/* Gray 4 */
border: none;
/* Inside auto layout */
order: 1;
flex-grow: 0;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
/* identical to box height */
/* Neutral/$gray-900 :: #303030 */
color: #303030;

.section {
    color: #2D9CDB;
    font-weight: 700;
    display: block;
}
span{
    font-weight: 600;
}



.comment{
    /* Input */
    box-sizing: border-box;
    /* Auto layout */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 2px 2px 2px 8px;
    width: 438px;
    height: 59px;
    /* Neutral/$white :: #FFF */
    background: #FFFFFF;
    /* Neutral/$gray-400 :: #868686 */
    border: 1px solid #868686;
    border-radius: 16px;
    /* Inside auto layout */
    flex: none;
    order: 3;
    align-self: stretch;
    flex-grow: 0;
}`

const Question = styled.div`
width: 50%;
margin-bottom: 29px;
.radio{
    margin-top: 10px;
}
`

const SectionTitle = styled.div`
width: 965px;
.section {
    color: #2D9CDB;
    font-weight: 700;
}

div{
    display: flex;
    justify-content: left;
    gap: 24px;
    margin-top: 21px;

    .fill-button{
        /* btn */
        /* Auto layout */
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px 12px 0px 20px;
        gap: 23px;
        width: 182px;
        height: 48px;
        /* Primária (Verde)/Verde Wexer */
        background: #00995D;
        /* tag */
        box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.15);
        border-radius: 24px;

        /* montserrat  16 bold */
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        display: flex;
        align-items: center;
        text-align: center;
        /* Branco */
        color: #FFFFFF;
        /* Inside auto layout */
        flex: none;
        order: 1;
        flex-grow: 0;
    }

    .border-button{
        box-sizing: border-box;
        /* Auto layout */
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px 12px 0px 24px;
        gap: 13px;
        width: 164px;
        height: 48px;
        /* Primária (Verde)/Verde Wexer */
        border: 1px solid #00995D;
        border-radius: 24px;

        /* montserrat  16 bold */
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        display: flex;
        align-items: center;
        text-align: center;
        /* Primária (Verde)/Verde Wexer */
        color: #00995D;
        /* Inside auto layout */
        flex: none;
        order: 0;
        flex-grow: 0;
    }
}`

const Triangulodir = styled.div`
    position: absolute;
    box-sizing: border-box;
    left: 750px;
    width: 30px;
    height: 30px;
    border-left: 30px solid #145267;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;`

const Trianguloesq = styled.div`
    position: absolute;
    box-sizing: border-box;
    left: 750px;
    width: 30px;
    height: 30px;
    border-left: 30px solid #145267;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;`

const Title = styled.span`
/* 14 semibold montserrat */
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 17px;
/* identical to box height */
display: flex;
align-items: center;
/* Gray 2 */
color: #4F4F4F;
/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;`

const Comments = styled.textarea`
/* input/ form */
box-sizing: border-box;
width: 959px;
height: 149px;
/* Branco */
background: #FFFFFF;
/* Gray 4 */
border: 1px solid #BDBDBD;
border-radius: 8px;
/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;

font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
display: flex;
align-items: center;
color: #C2C2C2;`

const Footer = styled.div`
position: relative;
z-index:1;
top: 200px;
left: 80px;
height: 460px;
width: 120%;
background: #E5E5E5;
display: flex;
justify-content: center;
align-items: center;

button{
    position: absolute;
    top: 300px;
}`

export default {
    Triangulodir,
    Trianguloesq,
    Head,
    TopBar,
    BreadCrumbs,
    BreadCrumbLabels,
    Container,
    InterviewResume,
    QuestionsBox,
    Question,
    Comments,
    SectionTitle,
    Title,
    Footer,
}