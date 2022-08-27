import React from 'react';
import { CartItemType } from 'App';
import { CartWrapper, InfoText } from './Cart.styles';
import CartItem from '../CartItem/CartItem';

type CartProps = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<CartProps> = ({
  cartItems,
  addToCart,
  removeFromCart,
}) => {
  const calculateTotalSum = (items: CartItemType[]) => {
    const sum = items.reduce(
      (acc: number, curr) => acc + curr.amount * curr.price,
      0,
    );
    return sum.toFixed(2);
  };

  return (
    <CartWrapper>
      {cartItems.length === 0 && <InfoText>No items in shopping cart</InfoText>}
      {cartItems.map(item => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      {cartItems.length !== 0 && (
        <InfoText>Total sum: &#36;{calculateTotalSum(cartItems)}</InfoText>
      )}
    </CartWrapper>
  );
};

export default Cart;
