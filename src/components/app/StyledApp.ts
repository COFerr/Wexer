import styled from "styled-components";

const Flex = styled.div`
position: fixed;
top: 0px;
display: flex;
z-index:900`

const Logo = styled.img`
width: 29px;
height: 45px
padding: 18px 26px;
padding-right: 26px;
padding-left: 26px;
background: #FFFFFF;
box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);`

const Mask = styled.img`
width: 29px;
height: 45px
padding: 18px 26px;`

const Around = styled.div`
display: flex;
justify-content:space-between;
font-family: montserrat;
color: #017849;
padding: 0 27.5px;
align-content: baseline;
height: 63px;
min-width: 91vw;
background: #FFFFFF;
/* Drop Shadow */
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`

const LeftBar = styled.div`
position: fixed;
text-align: center;
left: 0%;
right: 0%;
top: 63px;
bottom: -45.47%;
/* #00995D */
background: #00995D;
height: 1122px;
width: 81px;
border-radius: 0px;

& > img{
    padding: 35px 0px;
}
`

export default {
    Flex,
    Logo,
    Around,
    Mask,
    LeftBar,
}

