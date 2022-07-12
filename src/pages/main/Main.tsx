import React from "react"
import {useBgMain} from "./use-bg-main"
import './main.scss'

import CardList from "../../components/cardList/CardList"

const Main: React.FC = () => {
    const {className, bgStyle} = useBgMain()

    return(
        <div
            className={'main ' + className}
            style={{
                background: `${bgStyle}`,
            }}
        >
            <CardList />
        </div>
    )
}

export default Main