import React from 'react';
import { CartItemType } from 'App';
import {
  CartItemWrapper,
  AuxiliaryContainer,
  PurchaseInfo,
  CartItemButton,
} from './CartItem.styles';

type CartItemProps = {
  item: CartItemType;
  addToCart: (item: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: React.FC<CartItemProps> = ({
  item,
  addToCart,
  removeFromCart,
}) => {
  const totalAmount = (item.price * item.amount).toFixed(2);

  return (
    <CartItemWrapper>
      <PurchaseInfo>
        <h3>{item.title}</h3>
        <AuxiliaryContainer>
          <p>Price: &#36;{item.price}</p>
          <p>Total: &#36;{totalAmount}</p>
        </AuxiliaryContainer>
        <AuxiliaryContainer>
          <CartItemButton type="button" onClick={() => addToCart(item)}>+</CartItemButton>
          <p>Amount: {item.amount}</p>
          <CartItemButton type="button" onClick={() => removeFromCart(item.id)}>-</CartItemButton>
        </AuxiliaryContainer>
      </PurchaseInfo>
      <img src={item.image} alt={item.title} width="300" height="400" />
    </CartItemWrapper>
  );
};

export default CartItem;
