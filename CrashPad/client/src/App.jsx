import React from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AppRoutes from './AppRoutes';

function App() {
  return (
      <Router>
          <Navbar />
          <AppRoutes />
      </Router>
  );
}


export default App;
