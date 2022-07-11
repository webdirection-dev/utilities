import React from "react"
import './login.scss'

import ImgBackground from "../../components/ImgBackground"
import LoginForm from "../../components/LoginForm"

const Login: React.FC = () => {
    return(
        <div className='login'>
            <div className="container">
                <ImgBackground />

                <div className="content">
                    <div className="welcome">
                        <h1 className="title">Страница входа</h1>
                        <h3 className="subtitle">Добро пожаловать в раздел платежей</h3>
                    </div>

                    <LoginForm title='Войти'/>
                </div>
            </div>
        </div>
    )
}

export default Login