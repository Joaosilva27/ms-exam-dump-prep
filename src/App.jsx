import { Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import ExamHome from './components/ExamHome.jsx';
import Quiz from './components/Quiz.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exam/:examId" element={<ExamHome />} />
      <Route path="/exam/:examId/quiz" element={<Quiz />} />
    </Routes>
  );
}
