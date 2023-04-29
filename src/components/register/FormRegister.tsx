import { useForm } from "react-hook-form";
import S from "../login/styledLogin";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

type submit = {
  name: string;
  email: string;
  password: string;
  confirm: string;
};

type phase = 'name' | 'password'
function FormRegister() {
  const { register, handleSubmit } = useForm<submit>();
  const [user, setUser] = useState<submit>({name:"", email: "", password:"", confirm: ""})
  const[phase, setPhase] = useState<phase>('name')
  const onSubmit = (data: submit) => {
    alert(JSON.stringify(data));
    user.confirm === user.password ? alert('senhas iguais') : alert('senhas diferentes')
    navigate("/");
  };
  const navigate = useNavigate();

  return (
    <>
    {phase === 'name' &&
    <S.RegisterData>
      <label>
        Nome
        <br />
        <S.Input {...register("name")} onChange={(event : React.ChangeEvent<HTMLInputElement>) => setUser({...user, 'name': event.target.value})}/>
        <br />
      </label>
      <label>
        email
        <br />
        <S.Input {...register("email")} onChange={(event : React.ChangeEvent<HTMLInputElement>) => setUser({...user, 'email': event.target.value})}/>
        <br />
      </label>
      <div>
        <S.Continue onClick={() => {setPhase('password'); alert('prosseguir')}}>Prosseguir --+</S.Continue>
      </div>
    </S.RegisterData>}
    {phase === 'password' && 
    <S.RegisterData onSubmit={handleSubmit(onSubmit)}>
      <label>
        Senha
        <br />
        <S.Input {...register("password")} onChange={(event : React.ChangeEvent<HTMLInputElement>)=> setUser({...user, 'password': event.target.value})}/>
        <br />
      </label>
      <label>
        Confirmação
        <br />
        <S.Input {...register("confirm")} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUser({...user, 'confirm':event.target.value})}/>
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
