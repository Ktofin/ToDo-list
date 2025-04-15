import { useState } from 'react';
import { Todo } from '../../entities/todo/model';
import { createTodo, toggleTodo } from '../../entities/todo/useCases';

export function useTodoList() {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodo = (title: string) => {
        const newTodo = createTodo(title);
        setTodos((prev) => [...prev, newTodo]);
    };

    const removeTodo = (id: string) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };

    const toggleTodoById = (id: string) => {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id ? toggleTodo(todo) : todo
            )
        );
    };

    return { todos, addTodo, removeTodo, toggleTodoById };
}
