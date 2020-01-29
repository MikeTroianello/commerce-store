import React, { Component } from 'react';
import { connect } from 'react-redux';

import MenuItem from '../menu-item/menu-item.component.js';

import './directory.styles.scss';

const directory = () => {
  return (
    <div className='directory-menu'>
      {this.state.sections.map(({ id, ...otherProps }) => {
        return <MenuItem key={id} {...otherProps} />;
      })}
    </div>
  );
};

export default connect()(Directory);
