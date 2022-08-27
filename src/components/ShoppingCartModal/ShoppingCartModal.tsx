import React from 'react';
import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';

interface ShoppingCartModalProps {
  isOpen: boolean;
  children: any;
  onClose: () => void;
}

const MakeOrderButton = () => {
  return (
    <button
      style={{ textTransform: 'uppercase' }}
      type="button"
      onClick={() => console.log('Make order')}
    >
      To make order
    </button>
  );
};

const ShoppingCartModal: React.FC<ShoppingCartModalProps> = ({
  isOpen,
  children,
  onClose,
}) => {
  const handleCloseModal = () => {
    onClose();
    return true;
  };

  return (
    <PureModal
      header="Shopping cart"
      width="800px"
      footer={<MakeOrderButton />}
      isOpen={isOpen}
      onClose={handleCloseModal}
    >
      {children}
    </PureModal>
  );
};

export default ShoppingCartModal;
