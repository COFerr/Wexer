import { useForm } from "react-hook-form";
import S from "../login/styledLogin";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { registerService } from "../../components/services/register-service";

type submit = {
  name: string;
  email: string;
  password: string;
  confirm: string;
};

type phase = 'name' | 'password'
function FormRegister() {
  const { register, handleSubmit } = useForm<submit>();
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')
  const[name, setName] = useState('')
  const [user, setUser] = useState<submit>({name:"", email: "", password:"", confirm: ""})
  const[phase, setPhase] = useState<phase>('name')

  const onSubmit = (data: submit) => {
    user.confirm === user.password ?
    //alert(email+" "+ password + " " + name);
    newRegister()
     : alert('senhas diferentes')
  };

  const[error,setError] = useState('')
  const newRegister = async () => {
    try {
      const response = await registerService({ email, password, name });
      navigate("/");
    } catch (er) {
      if (er instanceof Error) {
        alert("Falha no cadastro. Por favor, tente novamente em alguns instantes")
        setError(er?.message);
        return;
      }
      setError("Deu erro");
    }
  };
  const navigate = useNavigate();

  return (
    <>
    {phase === 'name' &&
    <S.RegisterData onSubmit={handleSubmit(() => {setPhase('password');})}>
      <label>
        Nome
        <br />
        <S.Input 
        onChange={(event : React.ChangeEvent<HTMLInputElement>) => {
          setUser({...user, 'name': event.target.value});
          setName(event.target.value);
          }} required/>
        <br />
      </label>
      <label>
        email
        <br />
        <S.Input onChange={(event : React.ChangeEvent<HTMLInputElement>) => {
          setUser({...user, 'email': event.target.value});
          setEmail(event.target.value);
          }} required minLength={5}/>
        <br />
      </label>
      <div>
        <S.Continue type="submit">Prosseguir --+</S.Continue>
      </div>
    </S.RegisterData>}
    {phase === 'password' && 
    <S.RegisterData onSubmit={handleSubmit(onSubmit)}>
      <label>
        Senha
        <br />
        <S.Input onChange={(event : React.ChangeEvent<HTMLInputElement>)=> {
          setUser({...user, 'password': event.target.value});
          setPassword(event.target.value)
          }} required minLength={6}/>
        <br />
      </label>
      <label>
        Confirmação
        <br />
        <S.Input 
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUser({...user, 'confirm':event.target.value})} required minLength={6}/>
        <br />
      </label>
      <div>
        <S.Continue type="submit">Prosseguir --+</S.Continue>
      </div>
    </S.RegisterData>}
    </>
  );
}

export default FormRegister;
