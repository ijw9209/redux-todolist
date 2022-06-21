import React from 'react';

import { useDispatch } from 'react-redux';
import * as S from "./TodoItem.styles.js";
import { delete_todo } from '../commons/actions';


const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();
    const { id, title, isComplete } = todo;

    const handleClick = () => {
        dispatch(delete_todo(id));
    }
    return (
        <S.Container>
            <S.TextColumn>
                <div>
                    <S.Text>{title}</S.Text>
                </div>
                <S.X onClick={handleClick}>{isComplete || "X"}</S.X>
            </S.TextColumn>
        </S.Container>
    );
};

export default TodoItem;