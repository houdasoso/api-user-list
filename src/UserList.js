import  { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]); // state to store users

  // useEffect will run once when the component mounts
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users') // fetch data from API
      .then((response) => {
        setListOfUser(response.data); // update state with fetched users
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <div style={styles.container}>
      <h1>User List</h1>
      <ul style={styles.list}>
        {listOfUser.map((user) => (
          <li key={user.id} style={styles.card}>
            <strong>{user.name}</strong>
            <p>Email: {user.email}</p>
            <p>City: {user.address.city}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Simple inline styling
const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  card: {
    margin: '10px 0',
    padding: '15px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
  },
};

export default UserList;
