import React from 'react';
import './App.css';
import Card from './components/Card';
import List from './components/List';
import TypeMe from './components/TypeMe';
import MyForm from './components/MyForm';


function App() {
  const user = {
    name: 'Name: Pipatpol Jirawatpapha',
    job: 'Job: CS Student',
    hobby: 'Hobby: Playing Games'
  }
  
  const users = [{
    name: 'Name: Pipatpol Jirawatpapha',
    job: 'Job: Student',
    hobby: 'Hobby: Playing video games'
  },
  {
    name: 'Name: Pipatpol Jirawatpapha',
    job: 'Job: Student',
    hobby: 'Hobby: Playing piano'
  },
  {
    name: 'Name: Pipatpol Jirawatpapha',
    job: 'Job: Student',
    hobby: 'Hobby: Sleeping'
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
