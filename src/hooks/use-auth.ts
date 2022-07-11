export interface IUseAuth {
    email: string | null;
    accessToken?: string;
    uid: string;

}

export const useAuth = ({email, accessToken, uid}: IUseAuth) => {

    return {
        isAuth: !!email,
        email,
        token: accessToken,
        id: uid,
    }
}