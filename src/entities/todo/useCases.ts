import { Todo } from './model';

export const toggleTodo = (todo: Todo): Todo => ({
    ...todo,
    completed: !todo.completed,
});

export const createTodo = (title: string): Todo => ({
    id: crypto.randomUUID(),
    title,
    completed: false,
    description: '',
    createdAt: ''
});