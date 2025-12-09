import React from 'react'

const AddressCard = ({address}) => {
  return (

    <div>
      <div className='space-y-2'>
        <p className='font-semibold'>{address?.firstName}</p>
        <p>{address?.streetAddress} {address?.zipCode}, </p>
        <p>{address?.city}.</p>
      </div>
      <div className='space-y-1'>
        <p className='font-semibold'>Phone Number</p>
        <p>{address?.mobile}</p>

      </div>
    </div>
  )
}

export default AddressCard