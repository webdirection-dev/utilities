import React from "react"
import './cardList.scss'

import {invoices} from "../../static-data/invoices"

import CardItem from "../cardItem/CardItem"

import {MdCheckCircle} from "react-icons/md"

interface ICardListProp {
    location: string;
}

const CardList: React.FC<ICardListProp> = ({location}) => {
    return(
        <div className='content'>
            <div className="location">
                {location.toUpperCase()}
                <MdCheckCircle />
            </div>

            <ul className="cardList">
                {invoices.ulyanovskaya.map(i => {
                    return <CardItem key={i.account} {...i}/>
                })}
            </ul>
        </div>
    )
}

export default CardList