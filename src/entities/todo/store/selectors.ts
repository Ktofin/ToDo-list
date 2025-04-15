import { RootState } from '../../../app/store';

export const selectFilter = (state: RootState) => state.todos.filter;

export const selectFilteredTodos = (state: RootState) => {
    const { todos, filter } = state.todos;
    if (filter === 'completed') return todos.filter((t) => t.completed);
    if (filter === 'active') return todos.filter((t) => !t.completed);
    return todos;
};
