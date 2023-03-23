import React from 'react';
import Card from './Card.jsx';

const List = ({ users }) => {
  return (
    <div>
      {users.map((user, index) => (
        <Card key={index} user={user} />
      ))}
    </div>
  );
};

export default List;
