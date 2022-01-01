import React,{ useState } from 'react';
import Login from "../components/Login";
import { Modal } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Homescreen from '../screens/Homescreen';
import SignUp from './SignUp';

export default function Navbar() {
    // const [show, setShow] = useState(false);

    // const handleShow = () => setShow(true);
    // const handleClose = () => setShow(false);
    return (
        <Router>
            <div>
                <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded fixed-top">
                   
                    <a className="navbar-brand" href="#">دانشگاه آزاد اسلامی ایران</a>
                     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon bg-dark"></span>
                    </button>
                    
                    {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon bg-dark"></span>
                    </button> */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        
                            <ul className="navbar-nav text-align:center">
                                <li className="nav-item">
                                    <Link to="/home" className='nav-link'> خانه </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/hotel" className='nav-link'> رزرو هتل </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact" className='nav-link'> ارتباط با ما </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/login" className='nav-link'> ورود / ثبت نام </Link>
                                </li>
                            </ul>
                                               
                    </div>
                </nav>
                {/* <Modal show={show}>
                    <Modal.Header >
                        <Modal.Title>ثبت نام</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Login />
                    </Modal.Body>

                    <Modal.Footer>
                        <button className="btn" onClick={handleClose}>بستن</button>
                    </Modal.Footer>
                </Modal> */}
                
            </div>
            <Routes>
                <Route path="/login" element={<Login />}/>
                <Route path="/hotel" element={<Homescreen />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </Router>
    )
}
 