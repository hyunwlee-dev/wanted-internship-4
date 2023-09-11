import React, { ReactNode } from 'react';
import { Container } from '@/components/Container';
import * as S from './BaseLayout.style';

interface IProps {
  headerText: string;
  children?: ReactNode;
}

export const BaseLayout = ({ headerText, children }: IProps) => {
  return (
    <S.Layout>
      <S.Header>
        <h1>{headerText}</h1>
      </S.Header>
      <S.Main>
        <Container>{children}</Container>
      </S.Main>
    </S.Layout>
  );
};
