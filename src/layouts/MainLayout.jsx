import Header from "../components/Templates/Header/Header";
import {Outlet} from "react-router-dom";

const MainLayout = () => {

    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
}

export default MainLayout