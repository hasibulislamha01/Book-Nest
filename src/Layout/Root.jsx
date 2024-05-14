import { Outlet } from "react-router-dom";
import Navbar from "../SharedComponents/Navbar";
import Footer from "../SharedComponents/Footer/Footer";
// import { Footer } from "antd/es/layout/layout";

const Root = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;