import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 1280px;
`;

export const CartButton = styled.button`
  position: fixed;
  top: 10px;
  right: 100px;
  background-color: #C8C8C0;
  color: #fff;
  border: none;
  border-radius: 10px;
  width: 60px;
  min-height: 40px;
  cursor: pointer;
`;

export const LoadingSpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const ErrorText = styled.p`
  font-size: 30px;
  color: #95273a;
  text-align: center;
`;

export const AmountCircle = styled.div`
  position: absolute;
  font-size: 12px;
  top: -4px;
  left: -4px;
  width: 16px;
  height: 16px;
  line-height: 16px;
  border-radius: 8px;
  background-color: #f00;
`;
