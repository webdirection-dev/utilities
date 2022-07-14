import {useEffect, useState} from "react"
import {useAppSelector} from "../../hooks/redux-hooks"

export const useAnimationCardList = (location: string) => {
    const {isUlyanovskayaOpacity, isOstrovskogoOpacity} = useAppSelector(state => state.locationReducer)

    const [animation, setAnimation] = useState('')

    useEffect(() => {
        if (isUlyanovskayaOpacity && location === 'ульяновская' && animation !== '') setAnimation('opacity-show-left')
        if (!isUlyanovskayaOpacity && location === 'ульяновская' && isOstrovskogoOpacity) setAnimation('opacity-hide-left')

        if (isOstrovskogoOpacity && location === 'островского') setAnimation('opacity-show-right')
        if (!isOstrovskogoOpacity && location === 'островского') setAnimation('opacity-hide-right')

    }, [isUlyanovskayaOpacity, isOstrovskogoOpacity, location, animation])

    return {animation}
}