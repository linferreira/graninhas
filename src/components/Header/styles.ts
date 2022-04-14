import styled from "styled-components";

export const Container = styled.header`
  background: var(--pink);
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1120px;
  padding: 2rem 1rem 12rem;

  button {
    background: var(--pink-light);
    border: 0;
    border-radius: 0.25rem;
    color: var(--shape);
    font-size: 1rem;
    height: 3rem;
    padding: 0 2rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
