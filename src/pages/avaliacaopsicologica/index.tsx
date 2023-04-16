import S from "./AvaliacaoStyled"
import { questions } from "../../assets/questions"
import initialbreadcrumb from "../../assets/initialbreadcrumb.svg"
import middlebreadcrumb from "../../assets/middlebreadcrumb.svg"
import lastbreadcrumb from "../../assets/lastbreadcrumb.svg"

function AvaliacaoPsicologica() {
    function scrollTop(){
        window.scrollTo(0,0);
    }
    return (
        <>
            <S.TopBar>Voltar | <span>avaliação psicológica</span> | {(new Date).toDateString()}</S.TopBar>
            <S.BreadCrumbs>
                <img src={initialbreadcrumb} alt='breadcrumb' />
                <img src={middlebreadcrumb} alt='breadcrumb' />
                <img src={lastbreadcrumb} alt='breadcrumb' />
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
                        <textarea id='resume' placeholder="Nos dados registrados e observados durante a entrevista o(a) avaliado(a) declarou estar..." /><br />
                    </S.InterviewResume>
                    {questions.map((question, index) => {
                        return (
                            <>{question.answers.length !== 0 || question.complement !== '' ?
                                <S.Question>
                                    {question.answers.length !== 0 &&
                                        <><span>{question.id} - {question.question}</span><br /></>
                                    }
                                    {question.answers.map((answer) => {
                                        return (
                                            <>
                                                <input type="radio" className="radio" id={question.question} value={answer} name={question.question} key={index} />
                                                <label htmlFor={answer}>{answer}</label><br />
                                            </>
                                        )
                                    })}
                                    {question.complement !== '' && question.answers.length !== 0 &&
                                        <>
                                            <span>{question.complement}</span><br />
                                            <input type="text" placeholder="Resposta" className="comment" key={index} /><br />
                                        </>}
                                    {question.answers.length === 0 && question.complement !== '' &&
                                        <>
                                            <span>{question.id} - {question.complement}</span><br />
                                            <input type="text" className="comment" placeholder="Resposta" key={index} /><br />
                                        </>
                                    }
                                </S.Question> :
                                <S.SectionTitle>
                                    <div className="section" key={index}>
                                        {question.question}
                                        <br/><hr /><br/>
                                    </div>
                                </S.SectionTitle>
                            }</>
                        )
                    })}
                    <S.SectionTitle>
                        <div>
                            <button className="fill-button">vazio</button>   
                            <button className="border-button">vazio</button>                         
                        </div>
                    </S.SectionTitle>
                </S.QuestionsBox>
            </S.Container>
            <S.Footer>
                <button onClick={scrollTop}>^ Voltar para o topo</button>
            </S.Footer>
        </>
    )
}

export default AvaliacaoPsicologica