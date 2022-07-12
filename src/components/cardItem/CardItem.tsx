import React from "react"
import './cartdItem.scss'

import {useCardDate} from "./use-card-date"

interface IPropItemCard {
    [key: string]: string | number
}

const CardItem: React.FC<IPropItemCard> = (props) => {
    const {name, inn, account, paymentDay } = props
    const {footerTxt, handleClickInn, animationInn, animationAccount} = useCardDate(paymentDay as number)

    return(
        <li className="card">
            <div className="header">{name}</div>

            <div className="body">
                <div className="content">
                    <div
                        id='inn'
                        className='monitor'
                        onClick={(e) => handleClickInn(e)}
                    >ИНН: <span>{inn}</span></div>

                    <div className={'popUp' + animationInn}><p>ИНН cкопирован...</p></div>
                </div>

                <div className="content">
                    <div
                        id='account'
                        className='monitor'
                        onClick={(e) => handleClickInn(e)}
                    >ЛС: <span>{account}</span></div>

                    <div className={'popUp' + animationAccount}><p>ЛС cкопирован...</p></div>
                </div>
            </div>

            <div className="footer">
                <p>Дата платежа: <span>{footerTxt}</span></p>
            </div>
        </li>
    )
}

export default CardItem