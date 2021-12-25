import React from 'react'
import Hotel from '../components/Hotel'
import hotels from '../hotelsdata'
export default function Homescreen() {
    return (
        <div>
            <div className="row">

                {hotels.map(hotel=>{

                    return <div className="col-sm-12 col-md-6 col-lg-4">
                        <div>
                            <Hotel hotel={hotel} />
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}
