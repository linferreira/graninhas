import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Salário</td>
            <td className="deposity">R$3000,00</td>
            <td>Salário</td>
            <td>05/04/2022</td>
          </tr>
          <tr>
            <td>Aluguél</td>
            <td className="withdraw">- R$1200,00</td>
            <td>Casa</td>
            <td>07/04/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
