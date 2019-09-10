import React from 'react';
import MenuItem from '../../components/menu-item/menu-item.component';
import './homepage.styles.scss';

export default function Homepage() {
  return (
    <div className='homepage'>
      <div className='directory-menu'>
        <MenuItem title='Sneakers/>
      </div>
    </div>
  );
}
