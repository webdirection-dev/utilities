import React from "react"
import './cardList.scss'

import CardItem from "../cardItem/CardItem"

import {invoices} from "../../static-data/invoices"

const CardList: React.FC = () => {

    return(
        <ul className="cardList">
            {invoices.ulyanovskaya.map(i => {
                return <CardItem key={i.inn} {...i}/>
            })}
        </ul>
    )
}

export default CardList