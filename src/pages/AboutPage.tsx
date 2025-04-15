import { Typography, Container, AppBar, Toolbar, Link, Button } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";

export const AboutPage = () => {
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

            <Container sx={{ pt: '100px', pb: 4 }}>
                <Typography variant="h4" gutterBottom>
                    📘 О приложении
                </Typography>
                <Typography variant="body1" paragraph>
                    Это учебное приложение — список задач (Todo List), созданное с использованием современных технологий и архитектурного подхода.
                    Мы последовательно реализовали функциональность от простого интерфейса до полноценного приложения.
                </Typography>

                <Typography variant="h5" gutterBottom>
                    🔧 Этапы разработки:
                </Typography>

                <Typography variant="body1" paragraph>
                    <b>Этап 1: Базовый React (Vite + TypeScript)</b><br />
                    Создали простой Todo-лист без сохранения данных.<br />
                    Использовали useState и базовые хуки React.
                </Typography>

                <Typography variant="body1" paragraph>
                    <b>Этап 2: Стилизация с MUI</b><br />
                    Улучшили внешний вид с помощью Material UI. Добавили AppBar, List, кнопки и поля ввода.
                </Typography>

                <Typography variant="body1" paragraph>
                    <b>Этап 3: Валидация форм (react-hook-form + Yup)</b><br />
                    Реализовали валидацию полей через Yup и react-hook-form.
                </Typography>

                <Typography variant="body1" paragraph>
                    <b>Этап 4: Навигация (react-router-dom)</b><br />
                    Добавили маршруты и переходы между страницами. Главная страница и страница «О проекте».
                </Typography>

                <Typography variant="body1" paragraph>
                    <b>Этап 5: Глобальное состояние (Redux Toolkit)</b><br />
                    Перенесли управление задачами в Redux Toolkit. Использовали useDispatch и useSelector.
                </Typography>

                <Typography variant="body1" paragraph>
                    <b>Этап 6: Работа с датами (dayjs)</b><br />
                    Добавили отображение даты создания задачи в формате «ДД.ММ.ГГГГ ЧЧ:мм».
                </Typography>

                <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
                    ✨ Дополнительные фишки:
                </Typography>

                <ul style={{ paddingLeft: '1.5rem' }}>
                    <li>Фильтрация задач по статусу (все, активные, выполненные)</li>
                    <li>Раскрытие описания задачи</li>
                    <li>Кастомизация темы: цвета, шрифты, скругления</li>
                    <li>Сохранение состояния в LocalStorage (опционально)</li>
                </ul>
            </Container>
        </>
    );
};
