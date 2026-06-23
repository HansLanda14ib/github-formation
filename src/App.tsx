import { Navigate, Route, Routes } from 'react-router-dom'
import { DashboardPage } from './pages/DashboardPage'
import { JourneyPage } from './pages/JourneyPage'
import { SessionPage } from './pages/SessionPage'
import { DemoModePage } from './pages/DemoModePage'
import { ExerciseModePage } from './pages/ExerciseModePage'
import { QuizModePage } from './pages/QuizModePage'
import { NotFoundPage } from './pages/NotFoundPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/journey" element={<JourneyPage />} />
      <Route path="/session/:day" element={<SessionPage />} />
      <Route path="/demo/:day" element={<DemoModePage />} />
      <Route path="/exercise/:day" element={<ExerciseModePage />} />
      <Route path="/quiz/:day" element={<QuizModePage />} />
      <Route path="/session" element={<Navigate to="/session/1" replace />} />
      <Route path="/demo" element={<Navigate to="/demo/1" replace />} />
      <Route path="/exercise" element={<Navigate to="/exercise/1" replace />} />
      <Route path="/quiz" element={<Navigate to="/quiz/1" replace />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
