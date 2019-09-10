import React from 'react';
import MenuItem from '../../components/menu-item/menu-item.component';
import './homepage.styles.scss';

export default function Homepage() {
  console.log('YEET');
  return (
    <div className='homepage'>
      <div className='directory-menu'>
        <MenuItem title='Sneakers' />
        <MenuItem title='Sneakers' />
        <MenuItem title='Sneakers' />
        <MenuItem title='MENS' />
        <MenuItem title='Sneakers' />
      </div>
    </div>
  );
}
