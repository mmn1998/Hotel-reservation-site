import react,{ useState } from 'react';
import SignUp from '../components/SignUp';
import { Modal } from 'react-bootstrap';
import { Link } from "react-router-dom";
 
export default function Login(){
    // const [show, setShow] = useState(false);

    // const handleShow = () => setShow(true);
    // const handleClose = () => setShow(false);
    return (
            <div className='row m-5'>
                <form method='post' className='m-5'>
                    <div className='form-group row w-50 m-auto'>
                        <label className='col-md-2 input-label shodow'>نام کاربری</label>
                        <input className='col-md-10 text-input shodow' type='text' placeholder='نام کاربری...'/>
                        
                    </div>
                    <div className='form-group row mt-2 w-50 m-auto'>
                        <label className='col-md-2 input-label shodow'>پسورد</label>
                        
                        <input className='col-md-10 text-input shodow' type='password' placeholder='پسورد...'/>
                    </div>
                    <div className='form-group row mt-2 m-auto' style={{width:"10%"}}>
                        <button className='my-btn shadow'>ورود</button>
                    </div>
                    <div className='form-group row mt-2 w-25' style={{float:"left"}}>
                        <Link className='btn shodow w-25' to="/signup">ثبت نام</Link>                                        
                    </div>
                    {/* <Modal show={show}>
                    <Modal.Header >
                        <Modal.Title>ثبت نام</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <SignUp />
                    </Modal.Body>

                    <Modal.Footer>
                        <button className="btn shadow" onClick={handleClose}>بازگشت</button>
                    </Modal.Footer>
                </Modal> */}
                
                </form>
            </div>
            
    )
}