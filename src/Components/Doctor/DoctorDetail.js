import React from 'react';

const DoctorDetail = ({ data }) => {
    return (
        <div className="col-md-6">
            <div className="card">
                <img className="img-fluid rounded-circle" src={data.image} alt="" />
                <p>{data.name}</p>
                <button className="btn btn-primary">Appoint now</button>
            </div>

        </div>
    );
};

export default DoctorDetail;