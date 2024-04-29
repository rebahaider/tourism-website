


const ViewDetails = ({ tourist }) => {

    const { _id, photo, spotName, averageCost, totalVisitorsPerYear, travelTime, seasonality } = tourist;

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={photo}alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">New album is released!</h2>
                <p>Click the button to listen on Spotiwhy app.</p>

            </div>
        </div>

    );
};

export default ViewDetails;