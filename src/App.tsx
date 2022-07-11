import {Routes, Route, Navigate} from "react-router-dom"

import Login from "./pages/login/Login"
import Main from './pages/main/Main'
import NotFond from "./pages/notFound/NotFond"

const user = JSON.parse(localStorage.getItem('user') as string) || false

function App() {
    const auth = !!user.email
    console.log(auth)

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={auth ? <Main /> : <Navigate to='/login' replace={true} />} />
                <Route path="/login" element={!auth ? <Login /> : <Navigate to='/' replace={true} />} />
                {/*<Route path="/" element={<Main />} />*/}
                {/*<Route path="/login" element={<Login />} />*/}
                <Route path="*" element={<NotFond />} />
            </Routes>
        </div>
    );
}

export default App
