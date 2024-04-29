import { useLoaderData } from "react-router-dom";
import TouristCard from "./TouristCard";


const AllTourists = () => {

    const loadeSpots = useLoaderData();
    return (
        <div>
            <h2 className="text-3xl font-extrabold text-center mb-20">All Tourists Sections : {loadeSpots.length}</h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 p-6">
                {
                    loadeSpots.map(spot => <TouristCard key={spot._id} spot={spot}></TouristCard>)
                }
            </div>
        </div>
    );
};

export default AllTourists;