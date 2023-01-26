import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './modules/navbar';
import AppRouter from './modules/appRouter';

const App = () => {
  return (
      <BrowserRouter>
          <Navbar />
          <AppRouter />
      </BrowserRouter>
  );
}

export default App;
