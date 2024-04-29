// import { useLoaderData } from "react-router-dom";
// import ViewDetails from "./ViewDetails";

import Navbar from "../Home/Navbar";


const ViewDetailsPage = () => {

    // const loadTourists = useLoaderData();

    return (
        <div>
            <Navbar></Navbar>
            <h1>View Details Page</h1>
            {/* {
                loadTourists.map(tourist => <ViewDetails key={tourist._id} tourist={tourist}></ViewDetails>)
            } */}
        </div>

    );
};

export default ViewDetailsPage;