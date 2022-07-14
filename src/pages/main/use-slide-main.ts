import React, {useEffect, useState} from "react"
import {useAppDispatch, useAppSelector} from "../../hooks/redux-hooks"
import {setLocation, setOpacity} from "../../features/location/locationSlice"

interface ITouchClient {clientX?: number, clientY?: number}

export const useSlideMain = () => {
    const dispatch = useAppDispatch()
    const {isUlyanovskaya} = useAppSelector(state => state.locationReducer)
    const [animation, setAnimation] = useState('')
    const [isFirstTouch, setFirstTouch] = useState({} as ITouchClient)

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        setFirstTouch(e.touches[0])
    }

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (isFirstTouch.clientX === undefined || isFirstTouch.clientY === undefined) return
        const x2 = e.touches[0].clientX
        const y2 = e.touches[0].clientY

        const xDiff = x2 - isFirstTouch.clientX
        const yDiff = y2 - isFirstTouch.clientY

        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            // move to left
            if (xDiff > 0) {
                dispatch(setLocation('ul'))
                dispatch(setOpacity('ul'))

            }
            // move to right
            else {
                dispatch(setLocation('ost'))
                dispatch(setOpacity('ost'))
            }
        } else {
            // top or bottom
            // if (yDiff > 0) console.log('bottom')
            // else console.log('top')
        }

        setFirstTouch({})
    }

    useEffect(() => {
        if (isUlyanovskaya && animation !== '') setAnimation('slide-left')
        if (!isUlyanovskaya) setAnimation('slide-right')
    }, [isUlyanovskaya, animation])

    return {animation, handleTouchStart, handleTouchMove}
}