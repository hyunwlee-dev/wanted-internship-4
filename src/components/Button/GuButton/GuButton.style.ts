import styled, { css } from "styled-components";

export const GuButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Button = styled.button<{ $picked: boolean }>`
  padding: 0.25rem 0.5rem;
  border: 1px solid #212121;
  border-radius: 0.4rem;
  ${props => props.$picked && css`
    background: #E2E2E2;
  `}
`;
