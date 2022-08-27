import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { MdOutlineAddShoppingCart as AddShoppingCartIcon } from 'react-icons/md';
import { RingLoader } from 'react-spinners';

import {
  Container,
  CartButton,
  LoadingSpinnerContainer,
  ErrorText,
  AmountCircle,
} from 'App.styles';
import Cart from 'components/Cart/Cart';
import ProductItem from 'components/ProductCard/ProductItem';
import ShoppingCartModal from 'components/ShoppingCartModal/ShoppingCartModal';

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  title: string;
  price: number;
  amount: number;
};

const getProducts = async (): Promise<CartItemType[]> => {
  const response = await fetch('https://fakestoreapi.com/products?limit=9');
  const products = await response.json();
  return products;
};

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);

  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
    getProducts,
  );

  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((acc: number, curr) => acc + curr.amount, 0);

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems(prevState => {
      // The logic for case if item is already in the cart and user adds one more item
      const isItemInCart = prevState.find(item => item.id === clickedItem.id);
      if (isItemInCart) {
        const addOneMoreItem = prevState.map(item =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item,
        );
        return addOneMoreItem;
      }

      // The logic for case if item is added first time
      return [...prevState, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems(prevState =>
      prevState.reduce((acc, curr) => {
        if (curr.id === id) {
          if (curr.amount === 1) return acc;
          return [...acc, { ...curr, amount: curr.amount - 1 }];
        } else {
          return [...acc, curr];
        }
      }, [] as CartItemType[]),
    );
  };

  useEffect(() => {
    document.body.style.margin = '0px';
    document.body.style.backgroundColor = '#D1E7F2';
  }, []);

  if (isLoading) {
    return (
      <LoadingSpinnerContainer>
        <RingLoader color="#671d9d" />
      </LoadingSpinnerContainer>
    );
  }

  if (error) {
    return (
      <ErrorText>
        Some error happend! Please, try load page again latter.
      </ErrorText>
    );
  }

  return (
    <>
      <ShoppingCartModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
      </ShoppingCartModal>
      <Container>
        {data?.map(item => (
          <ProductItem
            key={item.id}
            item={item}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </Container>
      <CartButton type="button" onClick={() => setIsModalOpen(!isModalOpen)}>
        <AddShoppingCartIcon
          style={{ width: '22', height: '22', fill: '#000' }}
        />
        <AmountCircle>{getTotalItems(cartItems)}</AmountCircle>
      </CartButton>
    </>
  );
};

export default App;
