import React from "react"
import './navBar.scss'

import {setLocation, setOpacity} from "../../features/location/locationSlice"
import {useAppDispatch, useAppSelector} from "../../hooks/redux-hooks"

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"

const NavBar = () => {
    const dispatch = useAppDispatch()
    const {isUlyanovskaya} = useAppSelector(state => state.locationReducer)

    return(
        <nav className='nav'>
            <button
                className={isUlyanovskaya ? "navBtn left disable" : "navBtn left"}
                onClick={() => {
                    dispatch(setLocation('ul'))
                    dispatch(setOpacity('ul'))
                }}
            ><MdKeyboardArrowLeft /> Ульяновская</button>

            <button
                className={!isUlyanovskaya ? "navBtn right disable" : "navBtn right"}
                onClick={() => {
                    dispatch(setLocation('ost'))
                    dispatch(setOpacity('ost'))
                }}
            >Островского <MdKeyboardArrowRight /></button>
        </nav>
    )
}

export default NavBar