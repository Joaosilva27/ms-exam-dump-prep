import { Link } from 'react-router-dom';
import { exams } from '../data/exams.js';

export default function Home() {
  return (
    <div className="container">
      <h1>MS Security Exam Prep</h1>
      <p className="subtitle">Practice questions and quizzes for Microsoft security certifications. Pick an exam to begin.</p>
      <div className="cards">
        {Object.values(exams).map(e => (
          <Link key={e.id} to={`/exam/${e.id}`} className="card">
            <span className="badge" style={{ background: e.color }}>{e.name}</span>
            <h2>{e.title}</h2>
            <p style={{ color: '#9aa3bd' }}>{e.description}</p>
            <p style={{ color: '#4a5cff', fontWeight: 600 }}>{e.questions.length} questions →</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
