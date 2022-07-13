import {useEffect, useState} from "react"
import {useAppSelector} from "../../hooks/redux-hooks"

export const useAnimationMain = () => {

    const {isUlyanovskaya, isOstrovskogo} = useAppSelector(state => state.locationReducer)
    const [animation, setAnimation] = useState('')

    useEffect(() => {
        if (isUlyanovskaya && animation !== '') setAnimation('slide-left')
        if (isOstrovskogo) setAnimation('slide-right')
    }, [isUlyanovskaya, isOstrovskogo, animation])

    return {animation}
}