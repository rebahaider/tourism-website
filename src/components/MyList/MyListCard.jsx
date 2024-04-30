import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyListCard = ({ spot, spots, setSpots }) => {

    const { _id, photo, spotName, averageCost, totalVisitorsPerYear, travelTime, seasonality } = spot;

    const handleDelete = _id => {
        console.log('delete', _id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                console.log('delete ');



                fetch(`https://assignment-10-server-side-khaki.vercel.app/addTourists/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Spot has been deleted.",
                                icon: "success"
                            });
                            const remaining = spots.filter(place => place._id !== _id);
                            setSpots(remaining);
                        }
                    })
            }
        });
    }
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
                    <Link to={`/updateSpot/${_id}`}>
                        <button className="btn btn-success text-white font-extrabold bg-green-800">UPDATE</button>
                    </Link>
                    <button onClick={() => handleDelete(_id)} className="btn btn-error text-white font-extrabold bg-red-800 ">X</button>
                </div>
            </div>
        </div>
    );
};

export default MyListCard;