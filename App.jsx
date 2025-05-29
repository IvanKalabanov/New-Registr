import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Registr from './Registr'
import PersonalCabinet from './PersonalCabinet';
import Authorization from './authorization';

// Тестовая функция для проверки Firestore


// Вызовите testFirestore() где-нибудь в компоненте

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Registr />} />
        <Route path="/auth" element={<Authorization />} />
        <Route path='/cabinet' element={<PersonalCabinet />} />
        <Route path='*' element={<Navigate to='/' />} />
        {/* Другие маршруты */}
      </Routes>
    </Router>
    
  )
  testFirestore()
}


export default App