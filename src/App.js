// import React, { useState } from 'react';
import React from 'react';
import './App.css';
import Form from './components/Form/Form'
import WorksList from './components/WorksList/WorksList'
import Filter from './components/Filter/Filter'


function App() {
  return (
    <div className="app">
      <Form />
      <Filter />
      <WorksList />
    </div>
  );
}

export default App;
