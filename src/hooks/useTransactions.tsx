import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface ITransaction {
  id: number;
  title: string;
  amount: number;
  type: "deposit" | "withdraw";
  category: string;
  createdAt: string;
}

interface ITransactionProviderProps {
  children: ReactNode;
}

// interface ITransactionInput {
//   title: string;
//   amount: number;
//   category: string;
//   type: "deposit" | "withdraw";
// }

// type TansactionInput = Pick<ITransaction, "title" | "amount" | "category" | "type">;

type TransactionInput = Omit<ITransaction, "id" | "createdAt">;

interface ITransactionsContextData {
  transactions: ITransaction[];
  createTransaction(transaction: TransactionInput): Promise<void>;
}

export const TransactionsContext = createContext<ITransactionsContextData>(
  {} as ITransactionsContextData
);

export function TransactionsProvider({ children }: ITransactionProviderProps) {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  useEffect(() => {
    api("/transactions").then((response) =>
      setTransactions(response.data.transactions)
    );
  }, []);

  async function createTransaction(transactionData: TransactionInput) {
    const response = await api.post("/transactions", transactionData);

    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  }

  return (
    <TransactionsContext.Provider value={{ createTransaction, transactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}


export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}
