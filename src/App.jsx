import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './index.css';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import RegisterForm from './pages/RegisterForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/register' element={<RegisterForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;