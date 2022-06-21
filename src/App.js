import React from 'react';
import * as S from "./App.styles";

import InputForm from './components/InputForm';
import TodoList from './components/TodoList';
const App = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <h1>Redux로 배우는 TodoList</h1>
        <InputForm />
        <TodoList />
      </S.Wrapper>
    </S.Container>
  );
};

export default App;
// https://wonit.tistory.com/514
