import React, { Component } from 'react';
import { connect } from 'react-redux';

import MenuItem from '../menu-item/menu-item.component.js';

import './directory.styles.scss';

const Directory = ({ sections }) => {
  return (
    <div className='directory-menu'>
      {sections.map(({ id, ...otherProps }) => {
        return <MenuItem key={id} {...otherProps} />;
      })}
    </div>
  );
};

mapStateToProps = ({ directory }) => {};

export default connect(mapStateToProps)(Directory);
