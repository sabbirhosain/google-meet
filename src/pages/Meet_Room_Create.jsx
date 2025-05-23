import React, { useState } from 'react'

const Meet_Room_Create = () => {
  const [hostName, setHostName] = useState('');
  const [roomId, setRoomId] = useState('');
  const [roomPassword, setRoomPassword] = useState('');

  return (
    <div className='container'>
      <div className='d-flex align-items-center justify-content-center vh-100'>
        <div className="row justify-content-center w-100">
          <div className="col-md-4">
            <form className='shadow-sm bg-white p-4'>
              <h4 className='text-center mb-4'>Join Meet Room</h4>
              <div className="col-md-12 mb-3">
                <label className='form-label'>Host Name</label>
                <input type="text" className='form-control rounded-0 w-100' value={hostName} onChange={(e) => setHostName(e.target.value)} required />
              </div>
              <div className="col-md-12 mb-3">
                <label className='form-label'>Room ID</label>
                <input type="text" className='form-control rounded-0 w-100' value={roomId} onChange={(e) => setRoomId(e.target.value)} required />
              </div>
              <div className="col-md-12 mb-3">
                <label className='form-label'>Room Password</label>
                <input type="text" className='form-control rounded-0 w-100' value={roomPassword} onChange={(e) => setRoomPassword(e.target.value)} required />
              </div>
              <div className="col-md-12 mt-3">
                <button type="submit" className='btn btn-dark rounded-0 w-100'>Join Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Meet_Room_Create