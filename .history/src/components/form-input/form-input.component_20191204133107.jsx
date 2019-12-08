import React from 'react';

export default function FormInput({ handleChange, label, ...otherProps }) {
  return (
    <div className='group'>
      <input type='text' className='form-input' onChange={handleChange} />
    </div>
  );
}
