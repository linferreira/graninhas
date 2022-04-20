import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

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
  createTransaction(transaction: TransactionInput): void;
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

  function createTransaction(transaction: TransactionInput) {
    api.post("/transactions", transaction);
  }

  return (
    <TransactionsContext.Provider value={{ createTransaction, transactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}
