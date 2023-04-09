import S from "../../components/prontuario/StyledProntuario"
import image from "../../assets/react.svg"
import { useState } from "react"
import glass from "../../assets/glass.svg"

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
                    <input placeholder="O que você está procurando?"/>
                    <img src={glass} alt='glass'/>
                </div>
            </S.TaskBar>
            <S.ServicePosition>
                <S.AddService>vazio</S.AddService>
            </S.ServicePosition>
            <S.InfoPosition>
                <S.Info>
                    <span>Identificação do paciente</span>
                    <p>paciente</p>
                    <h5>Ana Ester Resende</h5>
                    <p>Nascimento</p>
                    <h5>10/09/2000</h5>
                    <p>Escolaridade</p>
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