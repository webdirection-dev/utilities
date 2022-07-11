import {useBg} from "../../hooks/use-bg"

export const useBgMain = () => {
    const {className, src} = useBg()

    const bgStyle = ` 
        linear-gradient(0deg, transparent 0%, rgba(34,193,195,.5) 15%, rgba(34,193,195,.8) 50%, transparent 100%),
        center / cover no-repeat url(${src})
    `

    return {className, bgStyle}
}