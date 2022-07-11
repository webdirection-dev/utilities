import React from "react"
import {Link, useLocation} from "react-router-dom"

const NotFound: React.FC = () => {
    const {pathname} = useLocation()

    return(
        <div style={{margin: '20px'}}>
            <h2>
                Страница <span style={{color: '#6439ff', textTransform: 'uppercase'}}>{pathname.split('/')[1]}</span> не найдена
            </h2>
            <h3>Пожалуйста, вернитесь <Link to='/' style={{color: 'blue', textDecoration: 'none'}}>в начало</Link></h3>
        </div>
    )
}

export default NotFound