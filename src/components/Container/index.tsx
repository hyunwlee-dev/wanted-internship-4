import React, { ReactNode } from 'react';
import * as S from './Container.style';

interface IProps {
  children?: ReactNode;
}

export const Container = ({ children }: IProps) => {
  return <S.Container>{children}</S.Container>;
};

