import { Outlet } from "react-router-dom";
import Navbar from "../SharedComponents/Navbar/Navbar";
import Footer from "../SharedComponents/Footer/Footer";
import { useEffect } from "react";
// import { Footer } from "antd/es/layout/layout";

const Root = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-offWhite dark:bg-neutral min-h-screen">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;