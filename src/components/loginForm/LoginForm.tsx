import React from "react"
import {useLoginForm} from "./use-login-form"

interface ILoginFormProp {
    title: string
}

const LoginForm: React.FC<ILoginFormProp> = ({title}) => {
    const {handleLogin, isFetching, setEmail, setPassword} = useLoginForm()

    return(
        <form className="loginForm">
            <label htmlFor="loginPanel">Имя или Почта</label>
            <input
                id='loginPanel'
                className='loginInput'
                type="text"
                placeholder='ваше имя или почта'
                onChange={e => setEmail(e.target.value)}
            />

            <label htmlFor="passwordPanel">Пароль</label>
            <input
                id='passwordPanel'
                className='loginInput'
                type="password"
                placeholder='ваш пароль'
                onChange={e => setPassword(e.target.value)}
            />

            <button
                className="loginBtn"
                onClick={e => handleLogin(e)}
                disabled={isFetching}
            >{title}</button>
        </form>
    )
}

export default LoginForm