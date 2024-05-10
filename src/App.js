import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard/Dashboard.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
