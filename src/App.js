import './App.css';
import Main from "./pages/Main";
import Init from "./pages/Init";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
      <div>
          <Routes>
            <Route path="/" element={<Init />} />
            <Route path="/main" element={<Main />} />
          </Routes>
      </div>
  );
}

export default App;
