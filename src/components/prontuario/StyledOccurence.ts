import styled from "styled-components";


type props = {
    color: '#00995D' | '#2F80ED' | '#9D28AC' | '#EA1E61';
}
const OccurrenceBox = styled.div`
position: relative;
width: 100%;
margin-top: 48px;

img{
    position: absolute;
    height: 48px;
    width: 48px;
    left: 24px;
    top: 0px;
    z-index: 2;
    border-radius: 0px;
}
.OccurrenceContent{
    position: relative;
    top: 24px;
    padding: 30px 19px 24px 24px;
    /* montserrat 16 */
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 170%;
    /* or 27px */
    /* Tons de cinza/Cinza 800 */
    color: #424242;
    /* Branco */
    background: #FFFFFF;
    /* Tons de cinza/Cinza 300 */
    border: 1px solid #E0E0E0;
    border-left: 4px solid ${({color}:props) => color};
    /* Sombra 1 */
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
    border-radius: 0px 8px 8px 0px;

    >h2{
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        /* identical to box height */
        color: #000000;
    }
    >span{
        font-size: 14px;
        /* Tons de cinza/Cinza 700 */
        color: #616161;
    }
}
`

export default{
    OccurrenceBox,
}