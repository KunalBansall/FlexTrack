import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import SignInForm from './components/auth/SignInForm';
import SignUpForm from './components/auth/SignUpForm';

function App() {
  return (
    <Router>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/signin" element={<SignInForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
}

export default App;