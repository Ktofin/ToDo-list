import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../entities/todo/store/todoSlice';

export const store = configureStore({
    reducer: {
        todos: todoReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const loadFromLocalStorage = (): RootState | undefined => {
    try {
        const serialized = localStorage.getItem('todo-state');
        return serialized ? JSON.parse(serialized) : undefined;
    } catch {
        return undefined;
    }
};

const saveToLocalStorage = (state: RootState) => {
    try {
        const serialized = JSON.stringify(state);
        localStorage.setItem('todo-state', serialized);
    } catch (e) {
        console.warn('Failed to save to localStorage', e);
    }
};

const preloadedState = loadFromLocalStorage();

export const storeWithPersist = configureStore({
    reducer: {
        todos: todoReducer,
    },
    preloadedState: preloadedState || undefined,
});

storeWithPersist.subscribe(() => {
    saveToLocalStorage(storeWithPersist.getState());
});
