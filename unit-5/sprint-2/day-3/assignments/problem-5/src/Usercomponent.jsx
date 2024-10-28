import React, { useContext } from 'react';
import { UserContext } from './contexts/UserContext';

const UserComponent = () => {
  const { user, login, logout } = useContext(UserContext);

  return (
    <div>
      {user ? (
        <>
          <h1>Welcome, {user.name}</h1>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <h1>Please log in</h1>
          <button onClick={() => login({ name: 'John Doe', email: 'john@example.com' })}>
            Login
          </button>
        </>
      )}
    </div>
  );
};

export default UserComponent;
