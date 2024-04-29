import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Navbar from '../Home/Navbar';
import Swal from 'sweetalert2';

const UpdateSpot = () => {
    const spot = useLoaderData();
    const { _id, photo, spotName, countryName, location, shortDescription, averageCost, seasonality, travelTime, totalVisitorsPerYear } = spot;

    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;

        const photo = form.photo.value;
        const spotName = form.spotName.value;
        const countryName = form.countryName.value;
        const location = form.location.value;
        const shortDescription = form.shortDescription.value;
        const averageCost = form.averageCost.value;
        const seasonality = form.seasonality.value;
        const travelTime = form.travelTime.value;
        const totalVisitorsPerYear = form.totalVisitorsPerYear.value;

        const updatedSpot = { photo, spotName, countryName, location, shortDescription, averageCost, seasonality, travelTime, totalVisitorsPerYear }

        console.log(updatedSpot);

        // send data to the server
        fetch(`http://localhost:5000/addTourists/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedSpot)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Spot Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div className="max-w-7xl mx-auto space-y-10">
            <Navbar></Navbar>
            <h2 className="text-3xl font-bold text-center mb-6">Update Tourists Spots</h2>
            <form onSubmit={handleUpdate} className="space-y-6 md:px-20 pb-10">
                {/* image field */}
                <div className="">
                    <h1 className="text-xl font-bold mb-2">Image</h1>
                    <label>
                        <input type="text" name="photo" defaultValue={photo} placeholder="Image URL..." className="input input-bordered input-primary w-1/2" />
                    </label>
                </div>
                {/* Tourist Spot Name field */}
                <div>
                    <h1 className="text-xl font-bold mb-2">Tourist Spot Name</h1>
                    <label>
                        <input type="text" name="spotName" defaultValue={spotName} placeholder="Tourist Spot Name" className="input input-bordered input-primary w-1/2" />
                    </label>
                </div>
                {/* Country Name */}
                <div>
                    <h1 className="text-xl font-bold mb-2">Country Name</h1>
                    <label>
                        <input type="text" name="countryName" defaultValue={countryName} placeholder="Country Name" className="input input-bordered input-primary w-1/2" />
                    </label>
                </div>
                {/* Location field */}
                <div>
                    <h1 className="text-xl font-bold mb-2">Location</h1>
                    <label>
                        <input type="text" name="location" defaultValue={location} placeholder="Location" className="input input-bordered input-primary w-1/2" />
                    </label>
                </div>
                {/* Short Description */}
                <div>
                    <h1 className="text-xl font-bold mb-2">Short Description</h1>
                    <label>
                        <input type="text" name="shortDescription" defaultValue={shortDescription} placeholder="Short Description" className="input input-bordered input-primary w-1/2" />
                    </label>
                </div>
                {/* Average Cost */}
                <div>
                    <h1 className="text-xl font-bold mb-2">Average Cost</h1>
                    <label>
                        <input type="text" name="averageCost" defaultValue={averageCost} placeholder="Average Cost" className="input input-bordered input-primary w-1/2" />
                    </label>
                </div>
                {/* Seasonality */}
                <div>
                    <h1 className="text-xl font-bold mb-2">Seasonality</h1>
                    <label>
                        <input type="text" name="seasonality" defaultValue={seasonality} placeholder="Seasonality" className="input input-bordered input-primary w-1/2" />
                    </label>
                </div>
                {/* Travel Time */}
                <div>
                    <h1 className="text-xl font-bold mb-2">Travel Time</h1>
                    <label>
                        <input type="text" name="travelTime" defaultValue={travelTime} placeholder="Travel Time" className="input input-bordered input-primary w-1/2" />
                    </label>
                </div>
                {/* Total Visitors Per Year */}
                <div>
                    <h1 className="text-xl font-bold mb-2">Total Visitors Per Year</h1>
                    <label>
                        <input type="text" name="totalVisitorsPerYear" defaultValue={totalVisitorsPerYear} placeholder="Total Visitors Per Year" className="input input-bordered input-primary w-1/2" />
                    </label>
                </div>

                {/* ADD button */}
                <div>
                    <label>
                        <input type="submit" value="UPDATE" className="btn btn-primary w-1/2 text-white font-extrabold text-xl" />
                    </label>
                </div>
            </form>
        </div>
    );
};

export default UpdateSpot;