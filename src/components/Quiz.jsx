import { useState, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { exams } from '../data/exams.js';

function shuffle(arr) { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

export default function Quiz() {
  const { examId } = useParams();
  const exam = exams[examId];
  const questions = useMemo(() => exam ? shuffle(exam.questions) : [], [exam]);
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  if (!exam) return <div className="container"><Link to="/" className="back">← Home</Link></div>;
  if (done) return (
    <div className="container">
      <Link to="/" className="back">← Home</Link>
      <h1 style={{ marginTop: 12 }}>Quiz complete</h1>
      <div className="question-card" style={{ textAlign: 'center' }}>
        <div className="score">{score} / {questions.length}</div>
        <p>{Math.round(score / questions.length * 100)}% correct</p>
        <div className="actions" style={{ justifyContent: 'center' }}>
          <button className="btn" onClick={() => { setIdx(0); setPicked(null); setScore(0); setDone(false); }}>Restart</button>
          <Link to={`/exam/${exam.id}`}><button className="btn secondary">Back to exam</button></Link>
        </div>
      </div>
    </div>
  );

  const q = questions[idx];
  const choose = (i) => { if (picked !== null) return; setPicked(i); if (i === q.answer) setScore(s => s + 1); };
  const next = () => { if (idx + 1 >= questions.length) { setDone(true); return; } setIdx(idx + 1); setPicked(null); };

  return (
    <div className="container">
      <Link to={`/exam/${exam.id}`} className="back">← {exam.name}</Link>
      <h1 style={{ marginTop: 12 }}>{exam.name} Practice</h1>
      <p className="progress">Question {idx + 1} of {questions.length} · Score: {score}</p>
      <div className="question-card">
        <h2 style={{ fontSize: '1.15rem' }}>{q.question}</h2>
        <div className="options">
          {q.options.map((opt, i) => {
            let cls = 'option';
            if (picked !== null) {
              cls += ' disabled';
              if (i === q.answer) cls += ' correct';
              else if (i === picked) cls += ' wrong';
            }
            return <button key={i} className={cls} onClick={() => choose(i)}>{opt}</button>;
          })}
        </div>
        {picked !== null && (
          <>
            <div className="explanation"><strong>Explanation:</strong> {q.explanation}</div>
            <div className="actions"><button className="btn" onClick={next}>{idx + 1 >= questions.length ? 'See results' : 'Next question'}</button></div>
          </>
        )}
      </div>
    </div>
  );
}
