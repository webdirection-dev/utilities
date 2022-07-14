import React from "react"
import {useBgMain} from "./use-bg-main"
import {useSlideMain} from "./use-slide-main"
import './main.scss'

import NavBar from "../../components/navBar/NavBar"
import CardList from "../../features/location/CardList"

const Main: React.FC = () => {
    const {className, bgStyle} = useBgMain()
    const {animation, handleTouchStart, handleTouchMove} = useSlideMain()

    return(
        <div
            className={'main ' + className}
            style={{
                background: `${bgStyle}`,
            }}
        >
            <NavBar />

            <div className={'container ' + animation}
                 onTouchStart={e => handleTouchStart(e)}
                 onTouchMove={e => handleTouchMove(e)}
            >
                <CardList location='ульяновская'/>
                <CardList location='островского'/>
            </div>
        </div>
    )
}

export default Main