import S from "../../components/prontuario/StyledProntuario"
import image from "../../assets/react.svg"
import { useState } from "react"
import glass from "../../assets/images/glass.svg"
import suitcase from "../../assets/images/case.svg"
import user from '../../assets/images/business.svg'
import business from '../../assets/images/business.svg'
import book from "../../assets/images/book.svg"
import ModalProntuario from "../../components/prontuario/ModalProntuario"
import sessao from "../../assets/images/sessao.svg"
import pencil from "../../assets/images/pencil.svg"
import junk from "../../assets/images/junk.svg"
import fato from "../../assets/images/fatorelevante.svg"
import anexo from "../../assets/images/anexo.svg"
import avaliacao from "../../assets/images/avaliacaopsicologica.svg"


type props = {
    service: 'Sessão' | 'Fato relevante' | 'Anexo' | 'Avaliação Psicológica' | "Anotações Pessoais" | "Serviço" | '';
}
function Prontuario() {
    const [prontuario, setProntuario] = useState(false)
    const [modal, setModal] = useState<props>({ service: '' })
    function changeView() {
        setProntuario(!prontuario);
    }

    function activateModal({ service }: props) {
        setModal({ service});
        window.scrollTo(0,0);

    }
    
    return (
        <>
                <S.ContainerBox>
                    <S.TaskBar prontuario={prontuario}>
                        <div>
                            <a onClick={changeView} className='prontuario'>Dados Cadastrais</a>
                            <a onClick={changeView} className='dados'>Prontuário</a>
                        </div>
                        <div className="search">
                            <input placeholder="O que você está procurando?"/>
                            <img src={glass} alt='glass' />
                        </div>
                    </S.TaskBar>
                    {!prontuario &&
                    <>
                    <S.ServicePosition>
                        <S.AddService>
                            <div>
                                <span>serviço:</span>
                                <select name="select" defaultValue='Novo acompanhamento'>
                                    <option value="valor1">Novo acompanhamento</option>
                                    <option value="valor2">Valor 2</option>
                                    <option value="valor3">Valor 3</option>
                                </select>
                                <span>data inicial:</span> 18/10/2022
                                <img src={pencil} alt='image' />
                                <img src={junk} alt='image' />
                            </div>
                            <hr />
                            <div>
                                <a onClick={() => activateModal({ service: "Sessão" })}><img src={sessao} alt='image'/>Sessão</a>
                                <a onClick={() => activateModal({ service: "Fato relevante"})}><img src={fato} alt='image'/>Fato Relevante</a>
                                <a onClick={() => activateModal({ service: "Anexo" })}><img src={anexo} alt='image'/>Anexo</a>
                                <a onClick={() => activateModal({ service: "Avaliação Psicológica" })}><img src={avaliacao} alt='image'/>Avaliação Psicológica</a>
                            </div>
                        </S.AddService>
                    </S.ServicePosition>
                    <S.InfoPosition>
                        <S.Info>
                            <span>Identificação do paciente</span>
                            <p><img src={user} alt='sticker' />  paciente</p>
                            <h5>Ana Ester Resende</h5>
                            <p><img src={business} alt='sticker' />  Nascimento</p>
                            <h5>10/09/2000</h5>
                            <p><img src={suitcase} alt='sticker' />  profissão</p>
                            <h5>Designer</h5>
                            <p><img src={book} alt='sticker' />  Escolaridade</p>
                            <h5>Superior Incompleto</h5>
                        </S.Info>
                        <S.Info>
                            <div>
                                <span>Demandas e objetivos</span>
                                <img src={pencil} alt='image' onClick={() => activateModal({ service: "Serviço" })} />
                            </div>
                            <h4>No dia 12 de fevereiro de 2015, a paciente B. A. V, 40 anos, solteira
                                e residente na cidade de Manaus, procurou atendimento psicológico em virtude de estar apresentando...</h4>
                        </S.Info>
                        <S.Info>
                            <div>
                                <span>Anotações pessoais</span>
                                <img src={pencil} alt='image' onClick={() => activateModal({ service: "Anotações Pessoais"})} />
                            </div>
                            <h4>Na sessão de hoje consegui identificar alguns sintomas de ansiedade através da fala e comportamento
                                da paciente. Tal como: inquietação e medos.</h4>
                        </S.Info>
                    </S.InfoPosition>
                    </>}
                    <ModalProntuario service={modal.service} modalState={() => activateModal({service: ""})}></ModalProntuario>
                </S.ContainerBox>
            {prontuario && <S.ContainerBox><h1>Dados do Paciente</h1></S.ContainerBox>}
        </>

    )
}

export default Prontuario