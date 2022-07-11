import React, {useEffect, useState} from "react"
import {useNavigate} from "react-router-dom"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import {useAuth} from "../hooks/use-auth"
import {IUseAuth} from "../hooks/use-auth"

interface ILoginFormProp {
    title: string
}

const LoginForm: React.FC<ILoginFormProp> = ({title}) => {
    const navigate = useNavigate()
    const hookUseAuth = useAuth
    const [email, setEmail] = useState('')

    const [password, setPassword] = useState('')
    const [userFirebase, setUserFirebase] = useState({} as IUseAuth)

    useEffect(() => {
        hookUseAuth(userFirebase)
    }, [userFirebase])

    const handleLogin = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        const auth = getAuth()

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const res = userCredential.user

                localStorage.setItem('user', JSON.stringify(res))

                setUserFirebase(res)

                navigate("/", { replace: true })
            })
            .catch((error) => {
                console.error(error.code)
                console.error(error.message)
            })
    }

    return(
        <form className="loginForm">
            <label htmlFor="loginPanel">Имя или Почта</label>
            <input
                id='loginPanel'
                className='loginInput'
                type="text"
                placeholder='ваше имя или почта'
                value={email}
                onChange={e => setEmail(e.target.value)}
            />

            <label htmlFor="passwordPanel">Пароль</label>
            <input
                id='passwordPanel'
                className='loginInput'
                type="password"
                placeholder='ваш пароль'
                value={password}
                onChange={e => setPassword(e.target.value)}
            />

            <button
                className="loginBtn"
                onClick={e => handleLogin(e)}
                // disabled={isFetching}
            >{title}</button>
        </form>
    )
}

export default LoginForm