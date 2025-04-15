import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

export type Todo = {
    id: string;
    title: string;
    description: string;
    completed: boolean;
    createdAt: string;
};

export type FilterType = 'all' | 'completed' | 'active';

type TodoState = {
    todos: Todo[];
    filter: FilterType;
};

const initialState: TodoState = {
    todos: [],
    filter: 'all',
};



const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<{ title: string; description: string }>) => {
            state.todos.push({
                id: Date.now().toString(),
                title: action.payload.title,
                description: action.payload.description,
                completed: false,
                createdAt: dayjs().toISOString(),
            });
        },
        removeTodo: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        toggleTodo: (state, action: PayloadAction<string>) => {
            const todo = state.todos.find((t) => t.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        setFilter: (state, action: PayloadAction<FilterType>) => {
            state.filter = action.payload;
        },
    },
});

export const { addTodo, removeTodo, toggleTodo, setFilter } = todoSlice.actions;
export default todoSlice.reducer;