import { Link, useParams } from 'react-router-dom';
import { exams } from '../data/exams.js';

export default function ExamHome() {
  const { examId } = useParams();
  const exam = exams[examId];
  if (!exam) return <div className="container"><Link to="/" className="back">← Home</Link><h1>Exam not found</h1></div>;
  return (
    <div className="container">
      <Link to="/" className="back">← Home</Link>
      <h1 style={{ marginTop: 12 }}>{exam.name}: {exam.title}</h1>
      <p className="subtitle">{exam.description}</p>
      <div className="question-card">
        <h2>Ready to study?</h2>
        <p>This question bank contains <strong>{exam.questions.length}</strong> multiple-choice questions. Questions are shuffled each session.</p>
        <div className="actions">
          <Link to={`/exam/${exam.id}/quiz`}><button className="btn">Start Quiz</button></Link>
        </div>
      </div>
    </div>
  );
}
