// UserList.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersRequest } from '../actions/userActions';

const UserList = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector(state => state.users);

  const handleFetchData = () => {
    dispatch(fetchUsersRequest());
  };

  return (
    <div>
      <h2>User List</h2>
      <button onClick={handleFetchData}>Fetch Data</button>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
