import styled from "styled-components";

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    background: var(--input-background);
    border: 1px solid var(--input-border);
    border-radius: 0.25rem;
    font-size: 1rem;
    font-weight: 400;
    height: 4rem;
    padding: 1.5rem;
    width: 100%;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    background: var(--green);
    border: 0;
    border-radius: 0.25rem;
    color: var(--shape);
    font-size: 1rem;
    font-weight: 600;
    height: 4rem;
    margin-top: 1rem;
    padding: 0 1.5rem;
    transition: filter 0.2s;
    width: 100%;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
