import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateRoom from './pages/CreateRoom';
import Dashboard from './pages/Dashboard';
import FeedbackInput from './pages/FeedbackInput';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f9', minHeight: '100vh' }}>
        <Routes>

          <Route path="/" element={<Home />} />
          
          <Route path="/" element={<CreateRoom />} />
          
          <Route path="/dashboard/:roomId" element={<Dashboard />} />
          
          <Route path="/room/:roomId" element={<FeedbackInput />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;