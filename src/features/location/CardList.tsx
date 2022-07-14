import React from "react"
import './cardList.scss'

import {invoices} from "../../static-data/invoices"

import CardItem from "../../components/cardItem/CardItem"

import {MdCheckCircle} from "react-icons/md"
import {useAnimationCardList} from "./use-animation-cardList"

interface ICardListProp {
    location: string;
}

const CardList: React.FC<ICardListProp> = ({location}) => {
    const {animation} = useAnimationCardList(location)

    const data = location === 'ульяновская' ? invoices.ulyanovskaya : invoices.ostrovskogo

    return(
        <div className={'content ' + animation}>
            <div className="location">
                {location.toUpperCase()}
                <MdCheckCircle />
            </div>

            <ul className="cardList">
                {data.map(i => <CardItem key={i.account} {...i}/>)}
            </ul>
        </div>
    )
}

export default CardList