import {useForm} from 'react-hook-form'
import S from "./styledLogin"


type submit = {
    login: string;
    password: string;
}
function LoginForm(){
    const {register, handleSubmit} = useForm<submit>();
    const onSubmit = (d : submit) => alert(JSON.stringify(d));

    return(
        <S.FormData onSubmit={handleSubmit(onSubmit)}>
            <label>
                login<br/>
                <S.Input {...register('login')}/><br/>
            </label>
            <label>
                senha<br/>
                <S.Input {...register("password") }/>
                <br/>
            </label>
            <S.Login type='submit'>Entrar</S.Login>
        </S.FormData>
    )
}

export default LoginForm