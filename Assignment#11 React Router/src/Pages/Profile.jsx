import React from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const { studentId } = useParams();

  return (
    <div>
      <p>This Student ID of user is {studentId}</p>
    </div>
  );
};

export default Profile;
