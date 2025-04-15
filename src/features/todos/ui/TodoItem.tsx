
import {    Checkbox,    IconButton, Box,   ListItem,Typography,Button, ListItemText, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions,} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import dayjs from 'dayjs';
import { Todo as TodoType } from '../../../entities/todo/store/todoSlice';
import { useState } from 'react';
import {green, red} from "@mui/material/colors";
type Props = {
    todo: TodoType;
    onToggle: () => void;
    onRemove: () => void;
};


export const TodoItem = ({ todo, onToggle, onRemove }: Props) => {
    const [expanded, setExpanded] = useState(false);
    const [confirmOpen, setConfirmOpen] = useState(false);
    const handleDeleteClick = () => setConfirmOpen(true);
    const handleConfirmClose = () => setConfirmOpen(false);
    const handleConfirmDelete = () => {
        onRemove();
        setConfirmOpen(false);
    };
    return (

        <ListItem
            sx={{
                bgcolor: '#f9f9f9',
                borderRadius: 1,
                mb: 1,
                pl: 1,
                pr: 6,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
            }}
            secondaryAction={
                <IconButton edge="end" onClick={handleDeleteClick} aria-label="delete">
                    <DeleteIcon />
                </IconButton>
            }

        >
            <Dialog open={confirmOpen} onClose={handleConfirmClose}>
                <DialogTitle>Удалить задачу?</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Вы уверены, что хотите удалить задачу «{todo.title}»?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleConfirmClose}>Отмена</Button>
                    <Button onClick={handleConfirmDelete} color="error">
                        Удалить
                    </Button>
                </DialogActions>
            </Dialog>
            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                <Checkbox
                    checked={todo.completed}
                    onChange={onToggle}
                    sx={{
                        color: green[600],
                        '&.Mui-checked': {
                            color: red[500],
                        },
                        transition: 'all 0.2s ease-in-out',
                    }}
                />
                <ListItemText
                    primary={
                        <Typography
                            sx={{
                                textDecoration: todo.completed ? 'line-through' : 'none',
                                fontWeight: 500,
                            }}
                        >
                            {todo.title}
                        </Typography>
                    }
                    secondary={
                        <Typography variant="caption" color="text.secondary">
                            {dayjs(todo.createdAt).format('DD.MM.YYYY HH:mm')}
                        </Typography>
                    }
                />
            </Box>

            {expanded && (
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                        mt: 1,
                        whiteSpace: 'pre-wrap',
                        wordBreak: 'break-word',
                        width: '100%',
                    }}
                >
                    {todo.description}
                </Typography>
            )}

            <Button
                onClick={() => setExpanded((prev) => !prev)}
                size="small"
                sx={{ mt: 1 }}
            >
                {expanded ? 'Скрыть' : 'Показать'} подробности
            </Button>
        </ListItem>
    );
};