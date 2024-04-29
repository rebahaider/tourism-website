import { useLoaderData } from "react-router-dom";


import Navbar from "../Home/Navbar";


const ViewDetailsPage = () => {

    const loadTourists = useLoaderData();
    const { photo, spotName, countryName, location, shortDescription, averageCost, seasonality, travelTime, totalVisitorsPerYear, email, userName } = loadTourists;

    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-3xl font-extrabold text-center">View Details</h2>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className="w-[450px] h-[450px] rounded-2xl p-6" src={photo} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold mb-3">Spot Name : {spotName}</h2>
                    <p><span className="font-bold">Country Name :</span> {countryName}</p>
                    <p><span className="font-bold">Location :</span> {location}</p>
                    <p><span className="font-bold">Short Description : </span>{shortDescription}</p>
                    <p><span className="font-bold">Average Cost :</span> {averageCost}</p>
                    <p><span className="font-bold">Seasonality :</span> {seasonality}</p>
                    <p><span className="font-bold">Travel Time :</span> {travelTime}</p>
                    <p><span className="font-bold">Total Visitors Per Year :</span> {totalVisitorsPerYear}</p>
                    <p><span className="font-bold">Email :</span> {email}</p>
                    <p><span className="font-bold">User Name :</span> {userName}</p>

                </div>
            </div>
        </div>

    );
};

export default ViewDetailsPage;