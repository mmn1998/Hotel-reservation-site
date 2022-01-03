import react from 'react';
import {Link} from "react-router-dom";
 
export default function SignUp(){
    return (
        <div className='row m-5'>
            <form method='post' className='m-5'>
                <div className='form-group row w-50 m-auto'>
                    <label className='col-md-2 input-label shodow'>نام کاربری</label>
                    <input className='col-md-10 text-input shodow' type='text' placeholder='نام کاربری...' required/>
                    
                </div>
                <div className='form-group row w-50 mt-2 m-auto'>
                    <label className='col-md-2 input-label shodow'>شماره موبایل</label>
                    <input className='col-md-10 text-input shodow' type='tel' pattern='[0-9]{11}' placeholder='شماره موبایل...' required/>
                </div>
                <div className='form-group row w-50 mt-2 m-auto'>
                    <label className='col-md-2 input-label shodow'>پسورد</label>
                    <input className='col-md-10 text-input shodow' type='password' placeholder='پسورد...' required/>
                </div>
                <div className='form-group row w-50 mt-2 m-auto' >
                    <label className='col-md-2 input-label shodow'>تکرار پسورد</label>
                    <input className='col-md-10 text-input shodow' type='password' placeholder='تکرار پسورد...' required/>
                </div>
                <div className='form-group row mt-2 m-auto' style={{width:"10%"}}>
                        <button className='my-btn shadow'>ثبت نام</button>
                    </div>
                <div className='form-group row mt-2 w-25' style={{float:"left"}}>
                        <Link className='btn shodow w-25' to="/login">ورود</Link>                                        
                </div>
            </form>
        </div>
    )
}