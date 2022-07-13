import React from "react"
import {useBgMain} from "./use-bg-main"
import {useAnimationMain} from "./use-animation-main"
import './main.scss'

import NavBar from "../../components/navBar/NavBar"
import CardList from "../../components/cardList/CardList"

const Main: React.FC = () => {
    const {className, bgStyle} = useBgMain()
    const {animation} = useAnimationMain()

    return(
        <div
            className={'main ' + className}
            style={{
                background: `${bgStyle}`,
            }}
        >
            <NavBar />

            <div className={'container ' + animation}>
                <CardList location='ульяновская'/>
                <CardList location='островского'/>
            </div>
        </div>
    )
}

export default Main