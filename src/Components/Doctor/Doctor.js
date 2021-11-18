import React, { useState } from 'react';
import { Dr } from '../Data/Data';
import DoctorDetail from './DoctorDetail';

const Doctor = () => {
    const [data, setData] = useState(Dr)
    return (
        <div className="container">
            <div className="row pt-5">
                {
                    data.map((data) => {
                        return <DoctorDetail key={data.id} data={data} />
                    })
                }
            </div>

        </div>
    );
};

export default Doctor;