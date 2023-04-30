import S from "./StyledModalProntuario"
import { useState } from 'react'
import React from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import close from "../../assets/images/close.svg"
import EditorToolbar, { modules, formats } from "./QuillToolbar";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";


type props = {
    service: 'Sessão' | 'Fato relevante' | 'Anexo' | 'Avaliação Psicológica' | "Anotações Pessoais" | "Serviço" | '';
    modalState: () => void;
}

const onSubmit = (data : InputEvent ) => {alert(JSON.stringify(data))};



function ModalProntuario({ service, modalState }: props): JSX.Element {
    const [value, setValue] = useState('')
    const Navigate = useNavigate()
    const {register, handleSubmit} = useForm<InputEvent>();
    return (
        <S.ModalProntuario service={service}>
            <S.ContainerModalProntuario service={service} >
                
                <div className='service'>
                    {service === 'Sessão' && <h2>Nova Sessão</h2>}
                    {service === 'Fato relevante' && <h2>Novo Fato Relevante</h2>}
                    {service === 'Anexo' && <h2>Novo Anexo</h2>}
                    {service === 'Avaliação Psicológica' && <h2>Nova Avaliação Psicológica</h2>}
                    {service === 'Anotações Pessoais' && <h2>Anotações Pessoais</h2>}
                    {service === 'Serviço' && <h2>Novo Serviço</h2>}
                    <a><img src={close} alt='vazio' onClick={modalState} /></a>
                </div>
                
                <form onSubmit={handleSubmit(onSubmit)}>
                {service === 'Sessão' &&
                    <>
                        <div className="flexleft"><span>1</span><p>Dados Gerais</p></div>
                        <div>
                            <div>
                                <label>Data*</label>
                                <input type="date" className="data"></input>
                            </div>
                            <div>
                                <label>Hora de início*</label>
                                <input className="data"></input>
                            </div>
                            <div>
                                <label>Hora fim*</label>
                                <input className="data"></input>
                            </div>
                        </div>
                        <hr />
                        <div className="flexleft"><span>2</span><p>Sessão</p></div>
                        <label>titulo*</label>
                        <input></input>
                        <label>Resumo da sessão*</label>
                        <textarea></textarea>
                    </>}
                {service === 'Fato relevante' &&
                    <>
                        <div>
                            <div>
                                <label>Data*</label>
                                <input type="date" className="data"></input>
                            </div>
                            <div>
                                <label>Título*</label>
                                <input className="title"></input>
                            </div>
                        </div>
                        <label>Descrição*</label>
                        <textarea placeholder="text"></textarea>
                    </>}
                {service === 'Anexo' &&
                    <>
                        <div>
                            <div>
                                <label>Data*</label>
                                <input type="date" className='data'></input>
                            </div>
                            <div>
                                <label>Título*</label>
                                <input className='title'></input>
                            </div>
                        </div>
                        <label>Descrição</label>
                        <textarea placeholder="text"></textarea>
                        <div><label >Anexar arquivos*</label></div>
                        <div className="upload">
                            <div className="inputFileOverlay">Escolher o arquivo...</div>
                            <input type="file" name="upload" id="upload" onChange={(e) => { setValue(e.target && e.target.files && !!e.target.files.length ? e.target.files[0].name : ''); console.log(e) }} />
                        </div>
                        <p>{value}{value && <img src={close} alt="fechar" onClick={() => setValue('')} />}</p>
                    </>}
                {service === 'Avaliação Psicológica' &&
                    <>
                        <div>
                            <div>
                                <label>Data*</label>
                                <input type="date" className="data"></input>
                            </div>
                        </div>
                        <div className="atention">
                            <span>Atenção</span><br />
                            <p>Você será redirecionado para uma nova página onde irá preencher
                                os dados da avaliação psicológica.</p>
                        </div>

                    </>
                }
                {service === 'Anotações Pessoais' &&
                    <>
                        <EditorToolbar />
                        <ReactQuill theme="snow" modules={modules} formats={formats}>
                            <S.EditingArea></S.EditingArea>
                        </ReactQuill>
                    </>
                }
                {service === 'Serviço' &&
                    <>
                        <p className="green">Paciente</p>
                        <p>{localStorage.getItem('patient')}</p>
                        <p className="green">CPF</p>
                        <p>000.000.000-00</p><br />
                        <label>Data inicial</label>
                        <input type="date" {...register('date')}></input>
                        <label>Serviço</label>
                        <select></select>
                        <label>Demandas e objetivos</label>
                        <textarea placeholder="text" {...register("demands") }/>
                    </>
                }

                {service !== 'Serviço' ?
                    <footer>
                        <div><p>*Campos obrigatórios</p></div>
                        <div>
                            <a className="cancel" onClick={modalState}>cancelar</a>
                            {service !== 'Avaliação Psicológica' ? <button className="confirm" type="submit">criar</button> : <a className="confirm" onClick={() => {Navigate('/user/avaliacao_psicologica')}}>prosseguir</a>}
                        </div>
                    </footer> :
                    <button type='submit'>Salvar</button>}
                    </form>
            </S.ContainerModalProntuario>
        </S.ModalProntuario>
    )
}

export default ModalProntuario