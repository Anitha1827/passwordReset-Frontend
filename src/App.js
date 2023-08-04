import './App.css';
import ForgotPasswordPage from './component/ForgotPasswordPage';
import ResetPasswordPage from './component/ResetPasswordForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<ForgotPasswordPage />} />
      <Route path="/ResetPasswordPage/:token" element={<ResetPasswordPage />} />
    </Routes>
  </Router>
  );
}

export default App;
