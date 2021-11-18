import React, { useState } from 'react';
import { Treatment } from '../Data/Data';
import ServiceDetail from './ServiceDetail';

const Service = () => {
    const [data, setData] = useState(Treatment)
    //console.log(data)
    return (
        <div className="container">
            <div className="row">

                {
                    data.map((data) => {
                        return <ServiceDetail key={data.id} data={data} />
                    })
                }
            </div>

        </div>
    );
};

export default Service;