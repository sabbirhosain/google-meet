import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='container'>
            <div className='d-flex align-items-center justify-content-center vh-100'>
                <div className="row justify-content-center w-100">
                    <div className="col-md-4">
                        <form className='shadow-sm bg-white p-4'>
                            <h4 className='text-center mb-4'>Login Now</h4>
                            <div className="col-md-12 mb-3">
                                <label className='form-label'>Email or Phone</label>
                                <input type="text" className='form-control rounded-0 w-100' value={user} onChange={(e) => setUser(e.target.value)} required />
                            </div>
                            <div className="col-md-12 mb-3">
                                <label className='form-label'>Password</label>
                                <input type="text" className='form-control rounded-0 w-100' value={password} onChange={(e) => setPassword(e.target.value)} required />
                            </div>
                            <div className="col-md-12 mt-3">
                                <button type="submit" className='btn btn-dark rounded-0 w-100'>Login Now</button>
                                <p className='text-center mt-4'>I don't have account <Link to='/register'>Register</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login