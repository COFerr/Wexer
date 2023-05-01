import { useForm } from "react-hook-form";
import S from "./styledLogin";
import { useNavigate } from "react-router-dom";
import { loginService } from "../../components/services/login-service";
import { userDataService } from "../../components/services/user_data-service";
import { useEffect, useState } from "react";

type submit = {
  login: string;
  password: string;
};
function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const userFields = async () => {
    try {
      const response = await userDataService();
      localStorage.setItem("name", response.name);
    } catch (er) {
      if (er instanceof Error) {
        alert("É necessário autenticar-se novamente");
        setError(er?.message);
        return;
      }
      setError("Deu erro");
    }
  }

  const login = async () => {
    try {
      const response = await loginService({ email, password });
      
      localStorage.setItem("token", response.token);
      console.log(localStorage.getItem("token"));
      userFields();
      setTimeout(() => {
      navigate("/user/prontuario");}, 1000);
    } catch (er) {
      if (er instanceof Error) {
        alert("Usuário e/ou senha incorretos.")
        setError(er?.message);
        return;
      }
      setError("Deu erro");
    }
  };

  useEffect(() => {
    console.log(error);
  }, [error]);

  const { register, handleSubmit } = useForm<submit>();
  const onSubmit = (data: submit) => {
    alert(JSON.stringify(data));
    alert(email + " " + password)
    //navigate("/user/prontuario");
  };

  return (
    <S.FormData onSubmit={handleSubmit(login)}>
      <label>
        login
        <br />
        <S.Input {...register("login")}
        onChange={(event : React.ChangeEvent<HTMLInputElement>)=> {setEmail(event.target.value)}}/>
        <br />
      </label>
      <label>
        senha
        <br />
        <S.Input {...register("password")} 
        onChange={(event : React.ChangeEvent<HTMLInputElement>)=> {setPassword(event.target.value)}}/>
        <br />
      </label>
      <S.Login type="submit">Entrar</S.Login>
    </S.FormData>
  );
}

export default LoginForm;
