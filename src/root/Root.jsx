import { Outlet } from "react-router-dom";
import Navbar from './../components/Navbar';
import Footer from "../pages/Footer";


const Root = () => {
    return (
        <div className="">
            <div className="container mx-auto">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Root;