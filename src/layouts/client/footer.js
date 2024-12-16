import CustomModal from '@/components/CustomModal'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <CustomModal title={"Modal"}>
        <div className='form'>
          <label className='form-label'>Enter Your Mobile Number</label>
          <input className='form-control' placeholder='Your Mobile Number'/>
        </div>
      </CustomModal>
    </div>
  )
}

export default Footer