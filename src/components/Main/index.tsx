import * as S from './styles';

const Main = ({ title = 'Hello World' }) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
  </S.Wrapper>
);

export default Main;
