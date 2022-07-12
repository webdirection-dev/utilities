import {Routes, Route, Navigate} from "react-router-dom"

import Login from "./pages/login/Login"
import Main from './pages/main/Main'
import NotFond from "./pages/notFound/NotFond"

import {useAuth} from "./hooks/use-auth"

function App() {
    const {isAuth} = useAuth()

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={isAuth ? <Main /> : <Navigate to='/login' replace={true} />} />
                <Route path="/login" element={!isAuth ? <Login /> : <Navigate to='/' replace={true} />} />
                <Route path="*" element={<NotFond />} />
            </Routes>
        </div>
    );
}

export default App
