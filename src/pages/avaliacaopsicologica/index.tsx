import S from "../../components/psievaluation/AvaliacaoStyled";
import { questions } from "../../assets/files/questions";
import initialbreadcrumb from "../../assets/images/initialbreadcrumb.svg";
import middlebreadcrumb from "../../assets/images/middlebreadcrumb.svg";
import lastbreadcrumb from "../../assets/images/lastbreadcrumb.svg";
import { useState } from "react";
import trash from "../../assets/images/junk.svg";
import React from "react";
import E from "../../components/prontuario/StyledModalProntuario";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import EditorToolbar, {
  modules,
  formats,
} from "../../components/prontuario/QuillToolbar";
import "react-quill/dist/quill.snow.css";
import {useNavigate} from 'react-router-dom'

function AvaliacaoPsicologica() {

  const navigate = useNavigate()
  function scrollTop() {
    window.scrollTo(0, 0);
  }
  const [evalPhase, setEvalPhase] = useState("init");
  const [tests, setTests] = useState({
    active: false,
    atencao: true,
    memoria: true,
    inteligencia: true,
  });
  return (
    <>
      <S.TopBar>
        Voltar | <span> avaliação psicológica </span> |{" "}
        {new Date().toDateString()}
      </S.TopBar>
      {evalPhase === "init" && (
        <>
          <S.BreadCrumbs>
            <img src={initialbreadcrumb} alt="breadcrumb" />
            <img src={middlebreadcrumb} alt="breadcrumb" />
            <img src={lastbreadcrumb} alt="breadcrumb" />
          </S.BreadCrumbs>
          <S.BreadCrumbLabels>
            <p>vazio</p>
            <p>vazio</p>
            <p>vazio</p>
          </S.BreadCrumbLabels>
          <S.Container>
            <S.Head>
              <div>
                <h1>Entrevista psicológica</h1>
              </div>
              <div>
                <button className="fill-button">vazio</button>
                <button className="border-button">vazio</button>
              </div>
            </S.Head>
            <S.QuestionsBox>
              <S.InterviewResume>
                <div>
                  <label htmlFor="resume">Síntese da entrevista</label>
                  <button>?</button>
                </div>
                <textarea
                  id="resume"
                  placeholder="Nos dados registrados e observados durante a entrevista o(a) avaliado(a) declarou estar..."
                />
                <br />
              </S.InterviewResume>
              {questions.map((question, index) => {
                return (
                  <>
                    {question.answers.length !== 0 ||
                    question.complement !== "" ? (
                      <S.Question>
                        {question.answers.length !== 0 && (
                          <>
                            <span>
                              {question.id} - {question.question}
                            </span>
                            <br />
                          </>
                        )}
                        {question.answers.map((answer) => {
                          return (
                            <>
                              <input
                                type="radio"
                                className="radio"
                                id={question.question}
                                value={answer}
                                name={question.question}
                                key={index}
                              />
                              <label htmlFor={answer}>{answer}</label>
                              <br />
                            </>
                          );
                        })}
                        {question.complement !== "" &&
                          question.answers.length !== 0 && (
                            <>
                              <span>{question.complement}</span>
                              <br />
                              <input
                                type="text"
                                placeholder="Resposta"
                                className="comment"
                                key={index}
                              />
                              <br />
                            </>
                          )}
                        {question.answers.length === 0 &&
                          question.complement !== "" && (
                            <>
                              <span>
                                {question.id} - {question.complement}
                              </span>
                              <br />
                              <input
                                type="text"
                                className="comment"
                                placeholder="Resposta"
                                key={index}
                              />
                              <br />
                            </>
                          )}
                      </S.Question>
                    ) : (
                      <S.SectionTitle>
                        <div className="section" key={index}>
                          {question.question}
                          <br />
                          <hr />
                          <br />
                        </div>
                      </S.SectionTitle>
                    )}
                  </>
                );
              })}
              <S.SectionTitle>
                <div>
                  <button className="fill-button" onClick={() => setEvalPhase('middle')}>vazio</button>
                  <button className="border-button">vazio</button>
                </div>
              </S.SectionTitle>
            </S.QuestionsBox>
          </S.Container>
          <S.ScrollTop onClick={scrollTop}>^ Voltar para o topo</S.ScrollTop>
        </>
      )}
      {evalPhase === "middle" && (
        <>
          <S.BreadCrumbs>
            <img src={initialbreadcrumb} alt="breadcrumb" />
            <img src={middlebreadcrumb} alt="breadcrumb" />
            <img src={lastbreadcrumb} alt="breadcrumb" />
          </S.BreadCrumbs>
          <S.BreadCrumbLabels>
            <p>vazio</p>
            <p>vazio</p>
            <p>vazio</p>
          </S.BreadCrumbLabels>
          {!tests.active && (
            <>
              <S.ContainerMin>
                <S.Head>
                  <div>
                    <h1>Entrevista psicológica</h1>
                  </div>
                  <div>
                    <button className="fill-button" onClick={() => setTests({...tests, active: true})}>vazio</button>
                    <button className="border-button">vazio</button>
                  </div>
                </S.Head>
                <span>Por favor, escolha um teste</span>
                <button className="add">vazio</button>
              </S.ContainerMin>
            </>
          )}
          {evalPhase === "middle" && tests.active && (
            <>
              <S.ContainerMin>
                <S.Head>
                  <div>
                    <h1>Entrevista Psicológica</h1>
                  </div>
                  <div>
                    <button className="fill-button">vazio</button>
                    <button className="border-button">vazio</button>
                  </div>
                </S.Head>
                {tests.atencao && (
                  <S.TestContainer>
                    <div className="testTitle">
                      <span>Atenção Concentrada/Seletiva</span>
                      <img src={trash} onClick={() => setTests({...tests, atencao: false})}></img>
                    </div>
                    <div className="testContent">
                      <div>
                        <label>nome</label>
                        <input className="data"></input>
                      </div>
                      <div>
                        <label>Número de pontos</label>
                        <input className="data"></input>
                      </div>
                      <div>
                        <label>percentil</label>
                        <input className="data"></input>
                      </div>
                      <div>
                        <label>Resultado</label>
                        <input className="data"></input>
                      </div>
                      <div>
                        <label>Obs:</label>
                        <input className="comment"></input>
                      </div>
                    </div>
                  </S.TestContainer>
                )}
                {tests.memoria && (
                  <S.TestContainer>
                    <div className="testTitle">
                      <span>Memória</span>
                      <img src={trash} onClick={() => setTests({...tests, memoria: false})}></img>
                    </div>
                    <div className="testContent">
                      <div>
                        <label>nome</label>
                        <input className="data"></input>
                      </div>
                      <div>
                        <label>Número de pontos</label>
                        <input className="data"></input>
                      </div>
                      <div>
                        <label>percentil</label>
                        <input className="data"></input>
                      </div>
                      <div>
                        <label>Resultado</label>
                        <input className="data"></input>
                      </div>
                      <div>
                        <label>Obs:</label>
                        <input className="comment"></input>
                      </div>
                    </div>
                  </S.TestContainer>
                )}
                {tests.inteligencia && (
                  <S.TestContainer>
                    <div className="testTitle">
                      <span>Inteligência</span>
                      <img src={trash} onClick={() => setTests({...tests, inteligencia: false})}></img>
                    </div>
                    <div className="testContent">
                      <div>
                        <label>nome</label>
                        <input className="data"></input>
                      </div>
                      <div>
                        <label>Número de pontos</label>
                        <input className="data"></input>
                      </div>
                      <div>
                        <label>percentil</label>
                        <input className="data"></input>
                      </div>
                      <div>
                        <label>Resultado</label>
                        <input className="data"></input>
                      </div>
                      <div>
                        <label>Obs:</label>
                        <input className="comment"></input>
                      </div>
                    </div>
                  </S.TestContainer>
                )}
                <S.TestFooter>
                  <button className="add">Vazio</button>
                  <S.SectionTitle>
                    <div>
                      <button className="fill-button" onClick={() => setEvalPhase('final')}>vazio</button>
                      <button className="border-button">vazio</button>
                    </div>
                  </S.SectionTitle>
                </S.TestFooter>
              </S.ContainerMin>
            </>
          )}
        </>
      )}
      {evalPhase === "final" && (
        <>
          <S.BreadCrumbs>
            <img src={initialbreadcrumb} alt="breadcrumb" />
            <img src={middlebreadcrumb} alt="breadcrumb" />
            <img src={lastbreadcrumb} alt="breadcrumb" />
          </S.BreadCrumbs>
          <S.BreadCrumbLabels>
            <p>vazio</p>
            <p>vazio</p>
            <p>vazio</p>
          </S.BreadCrumbLabels>
          <S.ContainerMin>
            <S.Head>
              <div>
                <h1>Entrevista Psicológica</h1>
              </div>
              <div>
                <button className="fill-button" onClick={()=>navigate('/user/prontuario')}>vazio</button>
              </div>
            </S.Head>
            <S.TextContainer>
              <h1>Síntese das observações comportamentais</h1>
              <EditorToolbar />
              <ReactQuill theme="snow" modules={modules} formats={formats}>
                <E.EditingArea></E.EditingArea>
              </ReactQuill>
            </S.TextContainer>
            <S.SectionTitle>
              <div>
                <button className="fill-button" onClick={()=> navigate('/user/prontuario')}>Vazio</button>
              </div>
            </S.SectionTitle>
          </S.ContainerMin>
        </>
      )}
    </>
  );
}

export default AvaliacaoPsicologica;
