import {useEffect, useState} from "react";

export const useCardDate = (paymentDay: number) => {
    const [footerTxt, setFooterTxt] = useState('')
    const [animationInn, setAnimationInn] = useState('')
    const [animationAccount, setAnimationAccount] = useState('')

    const handleClickInn = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const target = e.target as HTMLElement
        let copyTxt: string | null = ''

        if (target.localName === 'div' && target.textContent !== null) {
            copyTxt = target.textContent.split(':')[1].trim()
        } else copyTxt = target.textContent

        if (copyTxt !== null) navigator.clipboard.writeText(copyTxt.split(' ').join(''))

        if (target.id === 'inn' || (target.parentElement !== null && target.parentElement.id === 'inn')) {
            setAnimationInn(' animationRight')
        }

        if (target.id === 'account' || (target.parentElement !== null && target.parentElement.id === 'account')) {
            setAnimationAccount(' animationRight')
        }
    }

    useEffect(() => {
        if (animationInn === ' animationRight') {
            setTimeout(() => {
                setAnimationInn(' animationLeft')
            }, 2000)
        }

        if (animationAccount === ' animationRight') {
            setTimeout(() => {
                setAnimationAccount(' animationLeft')
            }, 2000)
        }
    }, [animationInn, animationAccount])

    useEffect(() => {
        const date = new Date()

        const optionsDate = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        } as {}

        const optionsWeekly = {
            weekday: 'long',
        } as {}

        const year = date.getFullYear()
        const month = date.getDate() > paymentDay ? date.getMonth() + 1 : date.getMonth()

        const nexDate = new Date(year, month, paymentDay)
        const payDay = nexDate.toLocaleString("ru", optionsDate)
        const payWeekday = nexDate.toLocaleString("ru", optionsWeekly)

        setFooterTxt(`${payDay} (${payWeekday})`)
    }, [paymentDay])

    return {footerTxt, handleClickInn, animationInn, animationAccount}
}