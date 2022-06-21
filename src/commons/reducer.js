import { ADD, DELETE } from './actions';

const initalState = {
    todos: []
}

export const reducer = (state = initalState, action) => {
    if (action.type === ADD) {
        return {
            //만약 다른 state가 존재한다면 ...state
            todos: [...state.todos, action.todo]
        }
    } else if (action.type === DELETE) {
        return {
            todos: [...state.todos.filter((todo) => todo.id !== action.id)],
        }
    } else {
        return state;
    }
}