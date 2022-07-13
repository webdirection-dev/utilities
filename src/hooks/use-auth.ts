import {useAppSelector} from "./redux-hooks"

export const useAuth = () => {
    const {email, token, id} = useAppSelector(state => state.authReducer)

    return {
        isAuth: !!email,
        email,
        token,
        id,
    }
}