import { Routes, Route } from 'react-router-dom';
import { TodoPage } from './pages/TodoPage';
import { AboutPage } from './pages/AboutPage';

function App() {
    return (
        <Routes>
            <Route path="/" element={<TodoPage />} />
            <Route path="/about" element={<AboutPage />} />
        </Routes>
    );
}

export default App;
