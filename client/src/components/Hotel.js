import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
export default function Hotel({ hotel }) {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    var myvar1;
    var myvar2;
    var myvar3;
    let price = document.getElementsByClassName('price');
    const handleChangePrice = (e) => {
        console.log(e)
        myvar1 = e.target.childNodes[e.target.selectedIndex].getAttribute('data-price')
        myvar2 = e.target.childNodes[0].getAttribute('data-id') - 1
    }
    const handleCount = (e) => {
        myvar3 = e.target.value
        if (myvar3 !== null && myvar2 !== null && myvar3 !== null)
            price[myvar2].innerHTML = myvar1 * myvar3
    }
    return (
        <div style={{ margin: '70px' }} className='shadow-lg p-3 mb-5 bg-white rounded'>

            <div onClick={handleShow}>
                <h1>{hotel.name}</h1>
                <img src={hotel.image} className="img-fluid" style={{ height: '200px', width: "300px" }} />
            </div>
            <div className="flex-container">
                <div className='w-100'>
                    <p>نوع تخت</p>
                    <select onChange={handleChangePrice}>
                        {hotel.prices.map(prices => {
                            return <option value={prices.title} data-price={prices.price} data-id={hotel.ID}>{prices.title}</option>
                        })}
                    </select>
                </div>
                <div className='w-100'>
                    <p>شب</p>
                    <select onChange={handleCount}>
                        {[...Array(11).keys()].map((x, i) => {
                            return <option value={i}>{i}</option>
                        })}
                    </select>
                </div>

            </div>
            <div className="flex-container">
                <div className='w-100 m-1'>
                    <p>
                        قيمت
                    </p>
                    <span className='price' data-index={hotel.ID}>  </span>
                </div>
                <div className='w-100 m-1'>
                    <button className="btn">رزرو</button>
                </div>
                </div>


            <Modal show={show}>
                <Modal.Header >
                    <Modal.Title>{hotel.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={hotel.image} className="img-fluid" style={{height:'400px'}} />
                    <p>{hotel.ancillaryFacilities}</p>
                </Modal.Body>

                <Modal.Footer>
                    <button className="btn" onClick={handleClose}>بستن</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
