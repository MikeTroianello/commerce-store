import React from 'react';
import { connect } from 'redux-store';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'></div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStatetoProps = ({ cart: { cartItems } }) => ({
  cartItems
});

export default connect(mapStatetoProps)(CartDropdown);
