import S from "../../components/prontuario/StyledProntuario";
import { useEffect, useState } from "react";
import glass from "../../assets/images/glass.svg";
import suitcase from "../../assets/images/case.svg";
import user from "../../assets/images/business.svg";
import business from "../../assets/images/business.svg";
import book from "../../assets/images/book.svg";
import ModalProntuario from "../../components/prontuario/ModalProntuario";
import sessao from "../../assets/images/sessao.svg";
import session_occurrence from "../../assets/images/session_occurrence.svg"
import pencil from "../../assets/images/pencil.svg";
import junk from "../../assets/images/junk.svg";
import fato from "../../assets/images/fatorelevante.svg";
import fact_occurrence from "../../assets/images/fact_occurrence.svg"
import anexo from "../../assets/images/anexo.svg";
import atttachment_occurrence from "../../assets/images/attachment_occurrence.svg"
import avaliacao from "../../assets/images/avaliacaopsicologica.svg";
import eval_occurrence from "../../assets/images/eval_occurrence.svg"
import O from "../../components/prontuario/StyledOccurence";
import { timelineService } from "../../components/services/timeline-service";
import { ocorrencias } from "../../assets/files/ocorrências";
import { pacientDataService } from "../../components/services/pacient_data-service";


type props = {
  service:
    | "Sessão"
    | "Fato relevante"
    | "Anexo"
    | "Avaliação Psicológica"
    | "Anotações Pessoais"
    | "Serviço"
    | "";
};

type patient = {
  _id: string;
  userId: string;
  name: string;
  birthdate: string;
  profession: string;
  schooling: string;
  demands: string;
  personalAnnotations: string;
};

type occurrence = {
  payment: {};
  _id: string;
  title: string;
  content: string;
  files: [];
  type: string;
  createdOn: string;
  modifiedOn: string;
  __v: number;
};

type timeline = {
  timeline: {
    _id: string;
    patientId: string;
    occurrences: occurrence[];
    serviceName: string;
    createdOn: string;
    modifiedOn: string;
  };
};

const userNames = ["Jesse", "Tom", "Anna"];

function Prontuario() {
  const [error, setError] = useState("");
  const [patient, setPatient] = useState<patient>();
  const patientFields = async () => {
    try {
      const response = await pacientDataService();
      setPatient(response);
      localStorage.setItem("patient", response?.name);
    } catch (er) {
      if (er instanceof Error) {
        alert("Paciente não encontrado");
        setError(er?.message);
        return;
      }
      setError("Deu erro");
    }
  };
  const [timeLine, setTimeLine] = useState<timeline>();
  const timeLineFields = async () => {
    try {
      const response = await timelineService.get("643dc6a38df02c8bf2aab8f4");
      setTimeLine(response);
    } catch (er) {
      if (er instanceof Error) {
        alert("Timeline não encontrada");
        setError(er?.message);
        return;
      }
      setError("Deu erro");
    }
  };
  useEffect(() => {
    patientFields();
    timeLineFields();
  }, []);

  useEffect(() => {
    console.log(JSON.stringify(timeLine?.timeline.occurrences[0]));
  }, [timeLine]);

  const [prontuario, setProntuario] = useState(false);
  const [modal, setModal] = useState<props>({ service: "" });
  function changeView() {
    setProntuario(!prontuario);
  }

  function activateModal({ service }: props) {
    setModal({ service });
    window.scrollTo(0, 0);
  }

  return (
    <>
      <S.ContainerBox>
        <S.TaskBar prontuario={prontuario}>
          <div>
            <a onClick={changeView} className="prontuario">
              Dados Cadastrais
            </a>
            <a onClick={changeView} className="dados">
              Prontuário
            </a>
          </div>
          <div className="search">
            <input placeholder="O que você está procurando?" />
            <img src={glass} alt="glass" />
          </div>
        </S.TaskBar>
        {!prontuario && (
          <>
            <S.InfoPosition>
              <S.Info>
                <span>Identificação do paciente</span>
                <p>
                  <img src={user} alt="sticker" /> paciente
                </p>
                <h5>{patient?.name}</h5>
                <p>
                  <img src={business} alt="sticker" /> Nascimento
                </p>
                <h5>
                  {patient?.birthdate &&
                    new Date(
                      patient.birthdate.split("-").join("/").split("T")[0]
                    ).toLocaleDateString("pt-BR")}
                </h5>
                <p>
                  <img src={suitcase} alt="sticker" /> profissão
                </p>
                <h5>{patient?.profession}</h5>
                <p>
                  <img src={book} alt="sticker" /> Escolaridade
                </p>
                <h5>{patient?.schooling}</h5>
              </S.Info>
              <S.Info>
                <div>
                  <span>Demandas e objetivos</span>
                  <img
                    src={pencil}
                    alt="image"
                    onClick={() => activateModal({ service: "Serviço" })}
                  />
                </div>
                <h4>{patient?.demands}</h4>
              </S.Info>
              <S.Info>
                <div>
                  <span>Anotações pessoais</span>
                  <img
                    src={pencil}
                    alt="image"
                    onClick={() =>
                      activateModal({ service: "Anotações Pessoais" })
                    }
                  />
                </div>
                <h4>{patient?.personalAnnotations}</h4>
              </S.Info>
            </S.InfoPosition>
            <S.ServicePosition>
              <S.AddService>
                <div>
                  <span>serviço:</span>
                  <select name="select" defaultValue="Novo acompanhamento">
                    <option value="valor1">Novo acompanhamento</option>
                    <option value="valor2">Valor 2</option>
                    <option value="valor3">Valor 3</option>
                  </select>
                  <span>data inicial:</span> 18/10/2022
                  <img src={pencil} className='edit' alt="image" />
                  <img src={junk} className="red" alt="image" />
                </div>
                <hr />
                <div>
                  <a onClick={() => activateModal({ service: "Sessão" })}>
                    <img src={sessao} alt="image" />
                    Sessão
                  </a>
                  <a
                    onClick={() => activateModal({ service: "Fato relevante" })}
                  >
                    <img src={fato} alt="image" />
                    Fato Relevante
                  </a>
                  <a onClick={() => activateModal({ service: "Anexo" })}>
                    <img src={anexo} alt="image" />
                    Anexo
                  </a>
                  <a
                    onClick={() =>
                      activateModal({ service: "Avaliação Psicológica" })
                    }
                  >
                    <img src={avaliacao} alt="image" />
                    Avaliação Psicológica
                  </a>
                </div>
              </S.AddService>
              <div className="splitter">
                <div>
                  <hr/>
                </div>
                <p>filtrar por todos</p>
              </div>              
              {timeLine?.timeline.occurrences.map((occurence, index) => (
                <>
                  {occurence.type === "session" && (
                    <>{index !== 0 && <div className="session"><hr/><p></p></div>}
                    <O.OccurrenceBox color="#00995D">
                      <img src={session_occurrence} alt="occurence" />
                      <div className="OccurrenceContent">
                        <h2>{occurence.title}</h2>
                        <span>{occurence.createdOn}</span>
                        <p>{occurence.content}</p>
                      </div>
                    </O.OccurrenceBox>
                    </>
                  )}
                  {occurence.type === "attachment" && (
                    <>{index !== 0 && <div className="attachment"><hr/><p></p></div>}
                    <O.OccurrenceBox color="#9D28AC">
                      <img src={atttachment_occurrence} alt="occurence" />
                      <div className="OccurrenceContent">
                        <h2>{occurence.title}</h2>
                        <span>{occurence.createdOn}</span>
                        <p>{occurence.content}</p>
                      </div>
                    </O.OccurrenceBox>
                    </>
                  )}
                  {occurence.type === "relevant_fact" && (
                    <>{index !== 0 && <div className="fact"><hr/> <p></p></div>}
                    <O.OccurrenceBox color="#2F80ED">
                      <img src={fact_occurrence} alt="occurence" />
                      <div className="OccurrenceContent">
                        <h2>{occurence.title}</h2>
                        <span>{occurence.createdOn}</span>
                        <p>{occurence.content}</p>
                      </div>
                    </O.OccurrenceBox></>
                  )}
                </>
              ))}
            </S.ServicePosition>
          </>
        )}
        <ModalProntuario
          service={modal.service}
          modalState={() => activateModal({ service: "" })}
        ></ModalProntuario>
      </S.ContainerBox>
      {prontuario && (
        <S.ContainerBox>
          <h1>Dados do Paciente</h1>
        </S.ContainerBox>
      )}
    </>
  );
}

export default Prontuario;
