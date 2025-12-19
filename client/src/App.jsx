import React from 'react'; // ✅ You must import React
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import ContactDetails from './ContactDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />  {/* default route */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<ContactDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
