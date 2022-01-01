import React from 'react'
import Hotel from '../components/Hotel'
import hotels from '../hotelsdata'
export default function Homescreen() {
    return (
        <div>
            <div className="row m-5">

                {hotels.map(hotel=>{

                    return <div className="col-md-6 col-sm-12 col-lg-4">
                        <div>
                            <Hotel hotel={hotel} />
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}
