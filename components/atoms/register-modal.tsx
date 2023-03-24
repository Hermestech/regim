import * as React from 'react';
import Modal from 'react-modal';
import Typography from './typography';
import { RegisterForm } from './register-form'; // Importa el nuevo componente

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onFormSubmitted: () => void;
}

export const RegisterModal = ({ isOpen, onClose, onFormSubmitted }: RegisterModalProps) => {


  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Register Modal"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        content: {
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          maxWidth: '500px',
          margin: '0 auto',
          padding: '2rem',
          border: 'none',
          boxShadow: '0 0 10px 2px rgba(0, 0, 0, 0.2)',
        },
      }}
      ariaHideApp={false}
    >
      <Typography variant="title" as={'h2'}>
        Register to get early access
      </Typography>
      <RegisterForm onFormSubmitted={onFormSubmitted} /> 
    </Modal>
  );
};
