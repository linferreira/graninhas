import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface IHeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header(props: IHeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="graninhas logo" />
        <button onClick={props.onOpenNewTransactionModal}>Nova transação</button>
      </Content>
    </Container>
  );
}
