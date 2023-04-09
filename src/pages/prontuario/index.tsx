import S from "../../components/prontuario/StyledProntuario"
import image from "../../assets/react.svg"
import { useState } from "react"
import glass from "../../assets/glass.svg"
import suitcase from "../../assets/case.svg"
import user from '../../assets/business.svg'
import business from '../../assets/business.svg'
import book from "../../assets/book.svg"

function Prontuario() {
    const [prontuario, setProntuario] = useState(true)
    function changeView() {
        setProntuario(!prontuario);
    }
    return (
        <S.ContainerBox>
            <S.TaskBar prontuario={prontuario}>
                <div>
                    <a onClick={changeView} className='prontuario'>Dados Cadastrais</a>
                    <a onClick={changeView} className='dados'>Prontuário</a>
                </div>
                <div className="search">
                    <input placeholder="O que você está procurando?" />
                    <img src={glass} alt='glass' />
                </div>
            </S.TaskBar>
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
                        <img src={image} alt='image' />
                        <img src={image} alt='image' />
                    </div>
                    <hr />
                    <div>
                        <a><img src={image} alt='image' />Sessão</a>
                        <a><img src={image} alt='image' />Fato Relevante</a>
                        <a><img src={image} alt='image' />Anexo</a>
                        <a><img src={image} alt='image' />Avaliação Psicológica</a>
                    </div>
                </S.AddService>
            </S.ServicePosition>
            <S.InfoPosition>
                <S.Info>
                    <span>Identificação do paciente</span>
                    <p><img src={user} alt='sticker'/>  paciente</p>
                    <h5>Ana Ester Resende</h5>
                    <p><img src={business} alt='sticker'/>  Nascimento</p>
                    <h5>10/09/2000</h5>
                    <p><img src={suitcase} alt='sticker'/>  profissão</p>
                    <h5>Designer</h5>
                    <p><img src={book} alt='sticker'/>  Escolaridade</p>
                    <h5>Superior Incompleto</h5>
                </S.Info>
                <S.Info>
                    <div>
                        <span>Demandas e objetivos</span>
                        <img src={image} alt='image' />
                    </div>
                    <h4>No dia 12 de fevereiro de 2015, a paciente B. A. V, 40 anos, solteira
                        e residente na cidade de Manaus, procurou atendimento psicológico em virtude de estar apresentando...</h4>
                </S.Info>
                <S.Info>
                    <div>
                        <span>Anotações pessoais</span>
                        <img src={image} alt='image' />
                    </div>
                    <h4>Na sessão de hoje consegui identificar alguns sintomas de ansiedade através da fala e comportamento
                        da paciente. Tal como: inquietação e medos.</h4>
                </S.Info>
            </S.InfoPosition>
        </S.ContainerBox>
    )
}

export default Prontuario