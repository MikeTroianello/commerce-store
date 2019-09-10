import React from 'react';

export default function MenuItem({ title, subtitle }) {
  return (
    <div className='menu-item'>
      <div className='content'>
        <h1 className='title'>{}</h1>
        <span className='subtitle'>{}</span>
      </div>
    </div>
  );
}
