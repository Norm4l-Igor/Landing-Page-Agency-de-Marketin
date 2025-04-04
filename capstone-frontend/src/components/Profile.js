import React from 'react';

const Profile = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <div className="container my-5">
      <h1>Your Profile</h1>
      {currentUser ? (
        <>
          <p><strong>Username:</strong> {currentUser.username}</p>
          <p><strong>Email:</strong> {currentUser.email}</p>
        </>
      ) : (
        <p>Please log in to view your profile.</p>
      )}
    </div>
  );
};

export default Profile;
