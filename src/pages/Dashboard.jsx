import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div className='container'>
            <div className='d-flex align-items-center justify-content-center vh-100'>
                <div className='row justify-content-center w-100'>
                    <div className='col-md-6'>
                        <div className='shadow-sm bg-dark px-4 py-5'>
                            <h4 className='text-center text-uppercase text-white pb-4'>Let's Start New Meeting</h4>
                            <div className="d-flex align-items-center justify-content-center gap-3">
                                <Link to='/meet-room-create' className='btn btn-primary rounded-0'>Create Meet</Link>
                                <button type='button' className='btn btn-danger rounded-0'>Logout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard