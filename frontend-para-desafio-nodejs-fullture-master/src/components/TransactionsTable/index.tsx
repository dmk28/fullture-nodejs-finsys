import { useTransactions } from "../../hooks/useTransactions";

import { Container } from "./styles";

import { FiEdit, FiTrash2 } from "react-icons/fi";

import moment from "moment";

import { api } from "../../services/api";

function handleEditTransaction(id: any, title: string, category: string, amount: number, type: string) {
  // Função de editar a transação
   api.put(`/${id}`)
   .then(() => {
    console.log("edit id", id, title, category, amount, type)
      window.location.reload()
     }
   );
  
}

function handleDeleteTransaction(id: any) {
  // Função de deletar a transação
    api.delete(`/${id}`)
        .then(() => {
            alert('Delete successful')
            window.location.reload()
          }
        );
}

export function TransactionsTable() {
  const { transactions } = useTransactions();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>
                  {/* {new Intl.DateTimeFormat('pt-BR', {timeZone: 'UTC'}).format(
                    new Date(transaction.createdAt))} */}
                    {moment(transaction.created_at).format("DD/MM/YYYY")}
                </td>
                <td>
                  <FiEdit
                    className='editButton'
                    onClick={() => handleEditTransaction(
                        transaction.id, 
                        transaction.title, 
                        transaction.category, 
                        transaction.amount,
                        transaction.type
                    )}
                  />
                  <FiTrash2
                    className='deleteButton'
                    onClick={() => handleDeleteTransaction(transaction.id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
}