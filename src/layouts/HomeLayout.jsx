import {Outlet} from 'react-router-dom'
import AdminHeader from "../components/Templates/Header/AdminHeader";


const HomeLayout = () => {

    return (
        <div>
            <AdminHeader/>
            <Outlet />
        </div>
    )
}

export default HomeLayout;