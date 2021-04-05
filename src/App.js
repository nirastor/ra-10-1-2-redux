// import React, { useState } from 'react';
import React from 'react';
import './App.css';
import Form from './components/Form/Form'
import WorksList from './components/WorksList/WorksList'


function App() {
  return (
    <div className="app">
      <Form />
      <WorksList />
    </div>
  );
}

export default App;
