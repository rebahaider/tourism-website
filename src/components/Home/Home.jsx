import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Banar from "./Banar";
import Footer from "../../footer/Footer";

const Home = () => {


    return (
        <div className="max-w-7xl mx-auto space-y-10">
            <Navbar></Navbar>
            <Banar></Banar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;