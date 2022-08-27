import styled from 'styled-components';

export const CartItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  width: 100%;
  padding: 10px;
`;

export const PurchaseInfo = styled.div`
  width: 300px;
`;

export const AuxiliaryContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CartItemButton = styled.button`
  border: none;
  margin: 0;
  padding: 0;
  min-height: 40px;
  width: 60px;
  cursor: pointer;
  font-weight: 600;
  background-color: #C8C8C0;
`;
