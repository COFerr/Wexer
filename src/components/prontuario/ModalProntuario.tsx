import S from "./StyledModalProntuario"
import { useState } from 'react'

type props = {
    service: 'Sessão' | 'Fato relevante' | 'Anexo' | 'Avaliação Psicológica' | "Anotações Pessoais" | "Serviço" | '';
}

function ModalProntuario({ service }: props): JSX.Element {
    return (
        <S.ModalProntuario service={service}>
            <S.ContainerModalProntuario service={service}>
                <div>
                    {service === 'Sessão' && <h2>Nova Sessão</h2>}
                    {service === 'Fato relevante' && <h2>Novo Fato Relevante</h2>}
                    {service === 'Anexo' && <h2>Novo Anexo</h2>}
                    {service === 'Avaliação Psicológica' && <h2>Nova Avaliação Psicológica</h2>}
                    {service === 'Anotações Pessoais' && <h2>Anotações Pessoais</h2>}
                    {service === 'Serviço' && <h2>Novo Serviço</h2>}
                    <a><img alt='vazio' /></a>
                </div>
                {service === 'Sessão' &&
                    <>
                        <span>1</span><p>Dados Gerais</p>
                        <div>
                            <div>
                                <label>vazio</label><br />
                                <input></input>
                            </div>
                            <div>
                                <label>vazio</label><br />
                                <input></input>
                            </div>
                            <div>
                                <label>vazio</label><br />
                                <input></input>
                            </div>
                        </div>
                        <hr />
                        <span>2</span><p>Sessão</p><br />
                        <label>titulo</label><br />
                        <input></input><br />
                        <label>Resumo da sessão</label><br />
                        <textarea></textarea>
                    </>}
                {service === 'Fato relevante' &&
                    <>
                        <div>
                            <div>
                                <label>Data*</label><br />
                                <input></input><br />
                            </div>
                            <div>
                                <label>Título*</label><br />
                                <input></input><br />
                            </div>
                        </div>
                        <label>Descrição</label><br />
                        <textarea></textarea>
                    </>}
                {service === 'Anexo' &&
                    <>
                        <div>
                            <div>
                                <label>Data*</label><br />
                                <input></input><br />
                            </div>
                            <div>
                                <label>Título*</label><br />
                                <input></input><br />
                            </div>
                        </div>
                        <label>Descrição</label><br />
                        <textarea></textarea><br />
                        <label>Anexar arquivos*</label><br />
                        <input type='file' />
                    </>}
                {service === 'Avaliação Psicológica' &&
                    <>
                        <label>Data*</label><br />
                        <input></input>

                        <div className="atention">
                            <span>Atenção</span>
                            <p>Você será redirecionado para uma nova página onde irá preencher
                                os dados da avaliação psicológica.</p>
                        </div>

                    </>
                }
                {service === 'Anotações Pessoais' &&
                    <>
                        <textarea/>
                    </>
                }
                {service === 'Serviço' &&
                    <>
                    <p className="green">Paciente</p>
                    <p>Nome Do Paciente</p>
                    <p className="green">CPF</p>
                    <p>000.000.000-00</p>
                    <label>Data inicial</label>
                    <input></input>
                    <label>Serviço</label>
                    <select></select>
                    <p>Demandas e objetivos</p>
                    <textarea/>
                    </>
                }

                <footer>
                    <div><p>Footer</p></div>
                    <div>
                        <button>vazio</button>
                        <button>vazio</button>
                    </div>
                </footer>
            </S.ContainerModalProntuario>
        </S.ModalProntuario>
    )
}

export default ModalProntuario