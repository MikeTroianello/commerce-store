import React, { Component } from 'react';
import { connect } from 'react-redux';

import MenuItem from '../menu-item/menu-item.component.js';

import './directory.styles.scss';

export default class Directory extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherProps }) => {
          return <MenuItem key={id} {...otherProps} />;
        })}
      </div>
    );
  }
}
