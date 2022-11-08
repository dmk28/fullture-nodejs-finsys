import { FormEvent, useState } from "react";
import Modal from "react-modal";
import { api } from "../../services/api";
import { useTransactions } from "../../hooks/useTransactions";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import closeImg from "../../assets/close.svg";

import { Container, TransactionTypeContainer, RadioBox } from "./styles";

interface EditTransactionModalProps {
  isOpen: boolean;
 
  id: any,
  title: string, 
  category: string, 
  type: string, 
  amount: number
  onRequestClose: () => void;
}

export function EditTransactionModal({
  isOpen,
  onRequestClose,
  id,
  title,
  category,
  type,
  amount
}: EditTransactionModalProps) {
   const { updateTransaction } = useTransactions();

  const [newType, setNewType] = useState(type);
  const [newTitle, setNewTitle] = useState(title);
  const [newAmount, setNewAmount] = useState(amount)
  const [newCategory, setNewCategory] = useState(category);

  async function handleEditTransaction(event: FormEvent) {
    event.preventDefault();
    await updateTransaction({ 
      title,
      amount,
      category,
      type,
    });
    setNewTitle(newTitle);
    setNewAmount(newAmount);
    setNewCategory(newCategory);
    setNewType(newType);
    onRequestClose();

   await api.put(`/${id}`, {newTitle, newAmount, newCategory, newType})
   .then(() => {
    //console.log(id, newTitle, newAmount, newCategory, newType)
       window.location.reload()
    },
   );
   }

  return (
    
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'>
      <button
        type='button'
        onClick={onRequestClose}
        className='react-modal-close'>
        <img src={closeImg} alt='Fechar modal' />
      </button>

      <Container onSubmit={handleEditTransaction}>
        <h2>Editar Transação</h2>

        <input
          placeholder='Título'
          value={newTitle}
          onChange={(event) => setNewTitle(event.target.value)}
        />

        <input
          type='number'
          placeholder='Valor'
          value={newAmount}
          onChange={(event) => setNewAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type='button'
            onClick={() => {
              setNewType("deposit");
            }}
            isActive={newType === "deposit"}
            activeColor='green'>
            <img src={incomeImg} alt='Entrada' />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type='button'
            onClick={() => {
              setNewType("withdraw");
            }}
            isActive={newType === "withdraw"}
            activeColor='red'>
            <img src={outcomeImg} alt='Saída' />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder='Categoria'
          value={newCategory}
          onChange={(event) => setNewCategory(event.target.value)}
        />

        <button type='submit'>Salvar</button>
      </Container>
    </Modal>
  );

}