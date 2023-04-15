import S from "./AvaliacaoStyled"
import { questions } from "../../assets/questions"
import initialbreadcrumb from "../../assets/initialbreadcrumb.svg"
import middlebreadcrumb from "../../assets/middlebreadcrumb.svg"
import lastbreadcrumb from "../../assets/lastbreadcrumb.svg"

function AvaliacaoPsicologica() {
    return (
        <>
            <S.TopBar>Voltar | <span>avaliação psicológica</span> | {(new Date).toDateString()}</S.TopBar>
            <S.BreadCrumbs>
                <img src={initialbreadcrumb} />
                <img src={middlebreadcrumb} />
                <img src={lastbreadcrumb} />
            </S.BreadCrumbs>
            <S.BreadCrumbLabels>
                <p>vazio</p>
                <p>vazio</p>
                <p>vazio</p>
            </S.BreadCrumbLabels>
            <S.Container>
                <S.Head>
                    <div><h1>Entrevista psicológica</h1></div>
                    <div>
                        <button className="fill-button">vazio</button>
                        <button className="border-button">vazio</button>
                    </div>
                </S.Head>
                <S.QuestionsBox>
                    <S.InterviewResume>
                        <div>
                            <label htmlFor="resume">Síntese da entrevista</label><button>?</button>
                        </div>
                        <textarea id='resume' /><br />
                    </S.InterviewResume>
                    {questions.map((question, index) => {
                        return (
                            <>{question.answers.length !== 0 ?
                                <S.Question>
                                    {question.answers.length !== 0 &&
                                        <><span>{index + 1} {question.question}</span><br /></>
                                    }
                                    {question.answers.map((answer) => {
                                        return (
                                            <>
                                                <input type="radio" className="radio" id={answer} value={answer} name={question.question} key={index} />
                                                <label htmlFor={answer}>{answer}</label><br />
                                            </>
                                        )
                                    })}
                                    {question.complement !== '' &&
                                        <>
                                            <span>{question.complement}</span><br />
                                            <input type="text" className="comment" key={index} /><br />
                                        </>}
                                </S.Question> :
                                <S.SectionTitle>
                                    <div className="section" key={index}>
                                        {question.question}
                                        <hr />
                                    </div>
                                </S.SectionTitle>
                            }</>
                        )
                    })}
                </S.QuestionsBox>
            </S.Container>
        </>
    )
}

export default AvaliacaoPsicologica