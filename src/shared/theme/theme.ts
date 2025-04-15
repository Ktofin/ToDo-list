import { createTheme } from '@mui/material/styles';

export const customTheme = createTheme({
    palette: {
        primary: { main: '#1565c0' },
        secondary: { main: '#ff9800' },
        background: {
            default: '#f3f6f9', // мягкий серый фон
        },
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Arial", sans-serif',
        button: {
            textTransform: 'none',
            fontWeight: 600,
        },
    },
    shape: {
        borderRadius: 12,
    },

    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                        transform: 'scale(1.02)',
                    },
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    background: 'rgba(21, 101, 192, 0.8)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                },
            },
        },
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    transition: 'all 0.2s ease',
                    '&:hover': {
                        transform: 'scale(1.1)',
                    },
                },
            },
        },

    },
});
