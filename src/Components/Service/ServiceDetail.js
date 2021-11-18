import React from 'react';
import { Link } from 'react-router-dom';

const ServiceDetail = ({ data }) => {
    console.log(data.id)

    return (
        <div className="col-md-4">
            <div className="row">
                <div className="card">
                    <img className="img-fluid" src={data.image} alt="" />

                </div>
                <div className="card-body">
                    <p>{data.name}</p>
                    <h5>{data.price}</h5>
                    <p>{data.desc}</p>
                    <Link to={`/serv/${data.id}`} > <button className="btn btn-primary">do it</button> </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;