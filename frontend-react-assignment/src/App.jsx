import React from 'react';
import './App.css';
import Card from './components/Card';
import List from './components/List';
import TypeMe from './components/TypeMe';
import MyForm from './components/MyForm';


function App() {
  const user = {
    name: 'Pipatpol Jirawatpapha',
    job: 'CS Student',
    hobby: 'Playing Games'
  }
  
  const users = [{
    name: 'Pipatpol Jirawatpapha',
    job: 'Student',
    hobby: 'Playing video games'
  },
  {
    name: 'Pipatpol Jirawatpapha',
    job: 'Student',
    hobby: 'Playing piano'
  },
  {
    name: 'Pipatpol Jirawatpapha',
    job: 'Student',
    hobby: 'Sleeping'
  }]

  return (
    <div className="App">
      <Card user={user} />
      <List users={users} />
      <TypeMe />
      <MyForm />
    </div>
  );
}

export default App;
