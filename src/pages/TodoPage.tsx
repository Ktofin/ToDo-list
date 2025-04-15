    import { AppBar, Toolbar, Typography, TextField, Button,  List, Box, Paper, Link } from '@mui/material';
    import { useDispatch, useSelector } from 'react-redux';
    import { addTodo, removeTodo, toggleTodo, setFilter } from '../entities/todo/store/todoSlice';
    import { TodoItem } from '../features/todos/ui/TodoItem.tsx';
    import { useForm } from 'react-hook-form';
    import { yupResolver } from '@hookform/resolvers/yup';
    import { todoSchema } from '../shared/validation/todoSchema';
    import { Link as RouterLink } from 'react-router-dom';
    import { selectFilter, selectFilteredTodos } from '../entities/todo/store/selectors';



    type FormData = {
        title: string;
        description: string;
    };

    export const TodoPage = () => {
        const dispatch = useDispatch();
        const todos = useSelector(selectFilteredTodos);
        const filter = useSelector(selectFilter);

        const {
            register,
            handleSubmit,
            reset,
            formState: { errors },
        } = useForm<FormData>({
            resolver: yupResolver(todoSchema),
        });

        const onSubmit = (data: FormData) => {
            dispatch(addTodo({ title: data.title, description: data.description }));
            reset();
        };

        return (
            <>
                <AppBar position="fixed" color="transparent" elevation={0}>
                    <Toolbar>
                        <Typography variant="h6" sx={{ flexGrow: 1 }}>
                            <Link component={RouterLink} to="/" color="inherit" underline="none">
                                ✅ Мой Список Дел
                            </Link>
                        </Typography>

                        <Button color="inherit" component={RouterLink} to="/about">
                            О проекте
                        </Button>
                    </Toolbar>
                </AppBar>

                <Box sx={{ pt: '100px', pl: 4, pr: 4 }}>
                    <Box sx={{ display: 'flex', gap: 4, alignItems: 'flex-start' }}>
                        {/* Левая колонка */}
                        <Box
                            sx={{
                                width: '400px',
                                maxWidth: '400px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Paper
                                elevation={6}
                                sx={{
                                    width: '100%',
                                    p: 4,
                                    borderRadius: 3,
                                    backgroundColor: '#fefefe',
                                }}
                            >
                                <Typography variant="h5" sx={{ mb: 2, fontWeight: 500 }}>
                                    Добавить новую задачу
                                </Typography>

                                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                                    <TextField
                                        label="Название задачи"
                                        fullWidth
                                        variant="outlined"
                                        {...register('title')}
                                        error={!!errors.title}
                                        helperText={errors.title?.message}
                                        sx={{
                                            mb: 2,
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: 2,
                                            },
                                        }}
                                    />
                                    <TextField
                                        label="Описание"
                                        fullWidth
                                        multiline
                                        rows={3}
                                        {...register('description')}
                                        error={!!errors.description}
                                        helperText={errors.description?.message}
                                        sx={{ mb: 2 }}
                                    />


                                    <Button
                                        variant="contained"
                                        fullWidth
                                        type="submit"
                                        sx={{
                                            py: 1.2,
                                            fontWeight: 'bold',
                                            borderRadius: 2,
                                        }}
                                    >
                                        Добавить
                                    </Button>
                                </form>
                            </Paper>
                        </Box>

                        {/* Правая колонка */}
                        <Box sx={{ flexGrow: 1 }}>
                            <Paper
                                elevation={6}
                                sx={{
                                    p: 4,
                                    width: '1400px',
                                    maxWidth: '1400px',
                                    borderRadius: 3,
                                    height: 'calc(100vh - 200px)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                            >
                                <Typography variant="h5" sx={{ mb: 2, fontWeight: 500 }}>
                                    Задачи
                                </Typography>

                                {/* Фильтры */}
                                <Box sx={{ mb: 2, display: 'flex', gap: 1 }}>
                                    <Button
                                        variant={filter === 'all' ? 'contained' : 'outlined'}
                                        onClick={() => dispatch(setFilter('all'))}
                                    >
                                        Все
                                    </Button>
                                    <Button
                                        variant={filter === 'active' ? 'contained' : 'outlined'}
                                        onClick={() => dispatch(setFilter('active'))}
                                    >
                                        Активные
                                    </Button>
                                    <Button
                                        variant={filter === 'completed' ? 'contained' : 'outlined'}
                                        onClick={() => dispatch(setFilter('completed'))}
                                    >
                                        Выполненые
                                    </Button>
                                </Box>

                                {todos.length === 0 ? (
                                    <Typography variant="body1" color="text.secondary">
                                        Задачи не найдены. Добавте или измените фильтр 👈
                                    </Typography>
                                ) : (
                                    <Box sx={{ flex: 1, overflowY: 'auto' }}>
                                        <List>
                                            {todos.map((todo) => (
                                                <TodoItem
                                                    key={todo.id}
                                                    todo={todo}
                                                    onToggle={() => dispatch(toggleTodo(todo.id))}
                                                    onRemove={() => dispatch(removeTodo(todo.id))}
                                                />
                                            ))}
                                        </List>
                                    </Box>
                                )}
                            </Paper>
                        </Box>
                    </Box>
                </Box>
            </>
        );
    };