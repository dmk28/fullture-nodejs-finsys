import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
} from "react";
import { api } from "../services/api";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  created_at: string;
}

type TransactionInput = Omit<Transaction, "id" | "created_at">;

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
  updateTransaction: (transaction: TransactionInput) => Promise<void>;
}


const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get("/transactions")
      .then((response) => {
        setTransactions(response.data)
      });
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post("/transactions", {
      ...transactionInput,
      created_at: new Date(),
    });

    const { data } = response;

    setTransactions([...transactions, data]);
  }

  async function updateTransaction(transactionInput: TransactionInput) {
    const response = await api.put("/id", {
      ...transactionInput,
      
    });

    const {data} = response;

    setTransactions([...transactions, data]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction, updateTransaction}}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}