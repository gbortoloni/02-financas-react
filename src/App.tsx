import { useState } from 'react';
import Modal from 'react-modal';

import { TransactionProvider } from './hooks/useTransactions'
import { Dashboard } from './components/Dashboard'
import { Header } from './components/Header'
import { NewTrasactionModalOpen } from './components/NewTransactionModal'

import { GlobalStyle } from './styles/global'

Modal.setAppElement('#root');

export function App() {
  const [isNewTrasactionModalOpen, setIsNewTrasactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTrasactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTrasactionModalOpen(false);
  }

  return (
    <TransactionProvider>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTrasactionModalOpen
        isOpen={isNewTrasactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </TransactionProvider>
  );
}
