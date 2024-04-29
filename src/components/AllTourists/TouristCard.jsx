import { Link } from "react-router-dom";


const TouristCard = ({ spot }) => {

    const {_id, photo, spotName, averageCost, totalVisitorsPerYear, travelTime, seasonality } = spot;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img className="w-[350px] h-[300px] rounded-2xl p-6" src={photo} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{spotName}</h2>
                <p>Average Cost : {averageCost}</p>
                <p>Visitors Per Year: {totalVisitorsPerYear}</p>
                <p>Travel Time: {travelTime}</p>
                <p>Seasonality: {seasonality}</p>
                <div className="card-actions">
                    <Link to={`/viewDetailsPage/${_id}`}>
                        <button className="btn btn-primary text-white font-extrabold">VIEW DETAILS</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TouristCard;