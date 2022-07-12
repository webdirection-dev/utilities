import React, {useState} from "react"
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"

import {setUser} from "../../store/userSlice"
import {useAppDispatch} from "../../hooks/redux-hooks"
import {useNavigate} from "react-router-dom"

export const useLoginForm = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isFetching, setIsFetching] = useState(false)

    const handleLogin = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        const auth = getAuth()

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setIsFetching(true)
                const res = userCredential.user

                dispatch(setUser({
                    email: res.email,
                    id: res.uid,
                    token: res.refreshToken,
                }))

                localStorage.setItem('user', JSON.stringify(res.email))
                navigate("/", { replace: true })
                setIsFetching(false)
            })
            .catch((error) => {
                console.error(error.code)
                console.error(error.message)
            })
    }

    return {handleLogin, isFetching, setEmail, setPassword}
}