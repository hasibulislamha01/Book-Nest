import { Outlet } from "react-router-dom";
import Footer from "../SharedComponents/Footer/Footer";
import MainNav from "../SharedComponents/Navbar/MainNav";
// import ScrollToTop from "../Components/UI/ScrollToTop/ScrollToTop";
// import { Footer } from "antd/es/layout/layout";

const Root = () => {


    return (
        <div>
            {/* <ScrollToTop/> */}
            <MainNav/>
            <div className="bg-offWhite dark:bg-neutral min-h-screen">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;