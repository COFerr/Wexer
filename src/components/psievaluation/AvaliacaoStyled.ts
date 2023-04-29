import styled from "styled-components";
import initialbreadcrumb from "../../assets/initialbreadcrumb.svg";
import middlebreadcrumb from "../../assets/middlebreadcrumb.svg";
import lastbreadcrumb from "../../assets/lastbreadcrumb.svg";

const TopBar = styled.div`
  position: relative;
  width: 100vw;
  height: 48px;
  left: 80px;
  top: 60px;
  background: #ffffff;
  border-radius: 16px;
  padding-left: 16px;

  /* montserrat 16 */
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */
  display: flex;
  align-items: center;
  /* Gray 2 */
  color: #4f4f4f;
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;

  span {
    font-weight: 700;
  }
`;

const BreadCrumbs = styled.div`
  position: relative;
  top: 120px;
  left: 117px;
  width: 1131px;
  display: flex;
  justify-content: space-between;
  img {
    width: 370px;
  }
`;

const BreadCrumbLabels = styled.div`
  position: relative;
  z-index: 2;
  top: 45px;
  left: 117px;
  width: 1131px;
  height: 73px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    width: 390px;
    text-align: center;
    /* montserrat 18 */
    font-family: "Montserrat";
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
`;

const Container = styled.div`
  /* Rectangle 284 */
  position: relative;
  z-index: 2;
  width: 1131px;
  height: 6400px;
  left: 117px;
  margin-top: 140px;
  margin-bottom: 94px;
  /* Branco */
  background: #ffffff;
  border-radius: 16px;
`

const Head = styled.div`
  height: 75px;
  width: 100%;
  border-radius: 20px;
  border-left: 6px solid #00995d;
  border-bottom: 2px solid #f2f2f2;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-right: 20px;
  }
  h1 {
    /* Entrevista */
    margin-left: 28px;
    /* montserrat 24 */
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    display: flex;
    align-items: center;
    /* Primária (Verde)/verde mais forte */
    color: #017849;
  }

  .fill-button {
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
    background: #00995d;
    /* tag */
    box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.15);
    border-radius: 24px;

    /* montserrat  16 bold */
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: center;
    text-align: center;
    /* Branco */
    color: #ffffff;
    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 0;
  }

  .border-button {
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
    border: 1px solid #00995d;
    border-radius: 24px;

    /* montserrat  16 bold */
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: center;
    text-align: center;
    /* Primária (Verde)/Verde Wexer */
    color: #00995d;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
  }
`;

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
}`;

const QuestionsBox = styled.div`
  margin-left: 28px;
  margin-top: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* input/ form */
  box-sizing: border-box;
  width: 959px;
  height: 149px;
  /* Branco */
  background: #ffffff;
  /* Gray 4 */
  border: none;
  /* Inside auto layout */
  order: 1;
  flex-grow: 0;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  /* Neutral/$gray-900 :: #303030 */
  color: #303030;

  .section {
    color: #2d9cdb;
    font-weight: 700;
    display: block;
  }
  span {
    font-weight: 600;
  }

  .comment {
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
    background: #ffffff;
    /* Neutral/$gray-400 :: #868686 */
    border: 1px solid #868686;
    border-radius: 16px;
    /* Inside auto layout */
    flex: none;
    order: 3;
    align-self: stretch;
    flex-grow: 0;
  }
`;

const Question = styled.div`
  width: 50%;
  margin-bottom: 29px;
  .radio {
    margin-top: 10px;
  }
`

const SectionTitle = styled.div`
  width: 965px;
  .section {
    color: #2d9cdb;
    font-weight: 700;
  }

  div {
    display: flex;
    justify-content: left;
    gap: 24px;
    margin-top: 21px;


    .fill-button {
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
      background: #00995d;
      /* tag */
      box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.15);
      border-radius: 24px;

      /* montserrat  16 bold */
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 20px;
      display: flex;
      align-items: center;
      text-align: center;
      /* Branco */
      color: #ffffff;
      /* Inside auto layout */
      flex: none;
      order: 1;
      flex-grow: 0;
    }

    .border-button {
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
      border: 1px solid #00995d;
      border-radius: 24px;

      /* montserrat  16 bold */
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 20px;
      display: flex;
      align-items: center;
      text-align: center;
      /* Primária (Verde)/Verde Wexer */
      color: #00995d;
      /* Inside auto layout */
      flex: none;
      order: 0;
      flex-grow: 0;
    }
  }
`

const ScrollTop = styled.button`
margin-left: 45%;
margin-bottom: 144px;`

const Triangulodir = styled.div`
  position: absolute;
  box-sizing: border-box;
  left: 750px;
  width: 30px;
  height: 30px;
  border-left: 30px solid #145267;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
`;

const Trianguloesq = styled.div`
  position: absolute;
  box-sizing: border-box;
  left: 750px;
  width: 30px;
  height: 30px;
  border-left: 30px solid #145267;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
`;

const Title = styled.span`
  /* 14 semibold montserrat */
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  display: flex;
  align-items: center;
  /* Gray 2 */
  color: #4f4f4f;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const Comments = styled.textarea`
  /* input/ form */
  box-sizing: border-box;
  width: 959px;
  height: 149px;
  /* Branco */
  background: #ffffff;
  /* Gray 4 */
  border: 1px solid #bdbdbd;
  border-radius: 8px;
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  color: #c2c2c2;
`

const Footer = styled.div`
  position: relative;
  z-index: 1;
  top: 200px;
  left: 80px;
  height: 460px;
  width: 120%;
  background: #e5e5e5;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    position: absolute;
    top: 300px;
  }
`

const ContainerMin = styled.div`
  /* Rectangle 284 */
  position: relative;
  z-index: 2;
  width: 1131px;
  min-height: 100%;
  left: 117px;
  margin-top: 140px;
  margin-bottom: 115px;
  /* Branco */
  background: #ffffff;
  border-radius: 16px;
  padding-bottom: 53px;
  

  span {
    /* montserrat  16 bold */
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: center;
    /* Gray 2 */
    color: #4f4f4f;
    margin: 24px 28px;
  }

  .add {
    /* Auto layout */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 17px;
    gap: 14px;
    margin: 13px 28px;
    width: 197px;
    height: 48px;
    /* Blue 1 */
    background: #2f80ed;
    color: white;
    /* tag */
    box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.15);
    border-radius: 24px;
  }
`

const TestContainer = styled.div`
  position: relative;
  left: 28px;
  width: 816px;
  margin-top: 50px;

  /* Gray 6 */

  background: #f2f2f2;
  border-radius: 8px;

  .testTitle {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: space-between;
    background: #FFFFFF;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
    border-radius: 16px;

    div {
      display: flex;
      justify-content: space-between;
    }

    span {
      /* montserrat  16 bold */
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 20px;
      /* identical to box height */
      display: flex;
      align-items: center;
      color: #000000;
    }
    img {
      cursor: pointer;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 4px 8px;
      gap: 10px;
      position: absolute;
      width: 16px;
      height: 16px;
      left: 761px;
      top: 19px;
      /* Branco */
      background: #ffffff;
      /* Sistema/Vermelho */
      border: 1px solid #eb5757;
      /* tag */
      box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.15);
      border-radius: 8px;
      margin-right: 16px;
    }
  }
  .testContent {
    width: 671px;
    display: flex;
    position: relative;
    z-index: 1;
    top: 25px;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 10px 80px 32px 65px;
    background: #f2f2f2;
    border-radius: 8px;

    input {
      /* input/ form */
      box-sizing: border-box;
      height: 50px;
      /* Gray 5 */
      background: #e0e0e0;
      /* Gray 4 */
      border: 1px solid #bdbdbd;
      border-radius: 8px;
      /* Inside auto layout */
      flex: none;
      order: 1;
      flex-grow: 0;
    }
    select {
      /* input/ form */
      box-sizing: border-box;
      height: 50px;
      /* Gray 5 */
      background: #e0e0e0;
      /* Gray 4 */
      border: 1px solid #bdbdbd;
      border-radius: 8px;
      /* Inside auto layout */
      flex: none;
      order: 1;
      flex-grow: 0;
    }
    label {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      display: flex;
      align-items: center;
      /* Gray 2 */
      color: #4f4f4f;
      /* Inside auto layout */
      flex: none;
      order: 0;
      flex-grow: 0;
      margin-top: 35px;
    }
    .data {
      width: 161px;
    }
    .emotion {
      width: 292px;
    }
    .comment {
      width: 671px;
    }
  }
`

const TestFooter = styled.div`
margin-top: 34px;
display: flex;
flex-direction: column;
gap: 51px;
`
const TextContainer = styled.div`
margin: 24px 31px;
padding: 10px 21px 20px 18px;
width: 747px;
background: #FFFFFF;
/* Sombra 1 */
box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
border-radius: 8px;

h1{
/* montserrat  16 bold */
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 20px;
display: flex;
align-items: center;
/* Tons de cinza/Cinza 900 */
color: #212121;}`

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
  ScrollTop,
  Title,
  Footer,
  ContainerMin,
  TestContainer,
  TestFooter,
  TextContainer,
};
