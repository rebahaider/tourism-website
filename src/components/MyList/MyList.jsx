import { useLoaderData } from "react-router-dom";
import Navbar from "../Home/Navbar";
import MyListCard from "./MyListCard";
import { useState } from "react";


const MyList = () => {

    const loadeSpots = useLoaderData();
    const [spots, setSpots] = useState(loadeSpots);

    return (
        <div className="max-w-7xl mx-auto space-y-10">
            <Navbar></Navbar>
            <h2 className="text-3xl font-extrabold text-center mb-20">My List: {loadeSpots.length}</h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 p-6">
                {
                    loadeSpots.map(spot => <MyListCard 
                        key={spot._id} 
                        spot={spot} 
                        spots={spots}
                        setSpots={setSpots}></MyListCard>)
                }
            </div>
        </div>
    );
};

export default MyList;