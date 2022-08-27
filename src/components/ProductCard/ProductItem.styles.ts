import styled from 'styled-components';

export const ProductItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  font-family: Arial, sans-serif;
  padding: 10px;
  border: 1px solid #000000;
  border-radius: 20px;
  width: 400px;
  min-height: 660px;
  background-color: #fff;
  &:not(:nth-last-child(-n + 3)) {
    margin-bottom: 20px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 200px;
    margin-top: 10px;
    justify-content: space-between;
  }

  h3 {
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0;
    padding: 0;
  }
`;

export const AddProductButton = styled.button`
  border: none;
  border-radius: 10px;
  padding: 0;
  width: 100px;
  font-weight: 600;
  min-height: 40px;
  color: #000;
  background-color: #c8c8c0;
  cursor: pointer;
`;
