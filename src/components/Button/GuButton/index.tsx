import * as S from './GuButton.style';
interface IProps {
  guTable: string[];
  pickedId: number;
  pickGuButton: (index: number) => void;
}

export const GuButtons = ({ guTable, pickedId, pickGuButton }: IProps) => {
  return (
    <S.GuButtons> {
      guTable.map((gu, index) =>
        <S.Button key={guTable[index]} onClick={() => pickGuButton(index)} $picked={(pickedId === index)}>{gu}</S.Button>
      )
    }
    </S.GuButtons>
  )
}
