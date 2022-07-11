import React from "react"
import {useBgMain} from "./use-bg-main"
import './main.scss'

const Main: React.FC = () => {

    const {className, bgStyle} = useBgMain()

    return(
        <div
            className={'main ' + className}
            style={{
                background: `${bgStyle}`,
            }}
        >Main</div>
    )
}

export default Main