import { FormEvent, useContext, useState } from "react";
import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { TransactionsContext } from "../../TransactionsContext";
import { Form, RadioBox, TransactionTypeContainer } from "./styles";

enum types {
  WITHDRAW = "withdraw",
  DEPOSIT = "deposit",
}

interface INewTransactionModal {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: INewTransactionModal) {
  const { createTransaction } = useContext(TransactionsContext);

  const [type, setType] = useState<"deposit" | "withdraw">(types.DEPOSIT);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");

  function handleChangeType(type: "deposit" | "withdraw") {
    setType(type);
  }

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    createTransaction({ title, amount, category, type });
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="close icon" />
      </button>
      <Form onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => handleChangeType(types.DEPOSIT)}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => handleChangeType(types.WITHDRAW)}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Form>
    </Modal>
  );
}
