import React from "react"
import {useBg} from "../../hooks/use-bg"

const ImgBackground: React.FC = () => {
    const {className, src} = useBg()

    return <img className={className} src={src} alt="img"/>
}

export default ImgBackground