import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import MainLayout from "../layouts/MainLayout";
import LoginPage from "../pages/Login";
import HomePage from "../pages/Home";
import PrivateRoutes from "../utils/PrivateRoute";
import HomeLayout from "../layouts/HomeLayout";
import SignUpPage from "../pages/SIgnUp/SignUpPage";
import IsLoggedIn from "../utils/IsLoggedIn";

function AppRouter() {
    return (

            <Router>
                <Routes>
                    <Route element={<IsLoggedIn />}>
                        <Route path={'/'} element={<MainLayout/>}>
                            <Route index element={<LoginPage/>}/>
                            <Route path={'/signUp'} element={<SignUpPage/>}/>
                        </Route>
                    </Route>
                    <Route element={<PrivateRoutes/>}>
                        <Route element={<HomeLayout/>}>
                            <Route path={'/home'} element={<HomePage/>}/>
                        </Route>
                    </Route>
                    <Route path="*" element={<h1>404 - Not Found</h1>}/>
                </Routes>
            </Router>
    )
}

export default AppRouter;