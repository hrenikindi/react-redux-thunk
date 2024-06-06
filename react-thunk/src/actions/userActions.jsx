export const FETCH_USERS = 'FETCH_USERS';

export const fetchUsers = (requestType, payload) => {
  switch (requestType) {
    case 'REQUEST':
      return {
        type: FETCH_USERS,
        payload: 'Fetching users...'
      };
    case 'SUCCESS':
      return {
        type: FETCH_USERS,
        payload: payload
      };
    case 'FAILURE':
      return {
        type: FETCH_USERS,
        payload: payload
      };
    default:
      return null;
  }
};
