import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Treatment } from '../Data/Data';

const SingleService = () => {
    const [data, setData] = useState({})
    const { id } = useParams()
    //console.log(id);
    useEffect(() => {
        const remain = Treatment.filter((t) => t.id === id)
        setData(remain[0]);
        console.log(remain[0])
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        alert("Tnk You Sir,You have successfully completed This package");
    }
    return (
        <div className="container">

            <div className="row">
                <div className="col-md-4 pt-5 m-auto">
                    <div className="card">
                        <img className="img-fluid" src={data.image} alt="" />
                        <h5>Treatment:{data.name}</h5>
                        <h5>Pirce:{data.price}</h5>
                        <p>Info:{data.more}</p>
                    </div>
                </div>
                <div className="col-md-5 m-auto">
                    <form onSubmit={handleSubmit}>
                        <input className="form-control" type="name" placeholder="Patient-Name" />
                        <input className="form-control" type="number" placeholder="Patient-age" />
                        <textarea className="form-control" placeholder="patient-problem"></textarea>
                        <input type="submit" value="submit" />

                    </form>
                </div>
            </div>

        </div>
    );
};

export default SingleService;