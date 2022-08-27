import React from 'react';
import { CartItemType } from 'App';
import { ProductItemContainer, AddProductButton } from './ProductItem.styles';

type ProductItemProps = {
  item: CartItemType;
  handleAddToCart: (item: CartItemType) => void;
};

const ProductItem: React.FC<ProductItemProps> = ({ item, handleAddToCart }) => {
  const { image, title, description, price } = item;
  return (
    <ProductItemContainer>
      <img src={image} alt={title} width="300" height="380" />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>&#36; {price}</p>
      </div>
      <AddProductButton type="button" onClick={() => handleAddToCart(item)}>
        Add to cart
      </AddProductButton>
    </ProductItemContainer>
  );
};

export default ProductItem;
