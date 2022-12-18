import './App.css';
import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import Home from './Home';
import Function from './Function';


function App() {
  const [text, setText] = useState('This is test varible in react');
  // Declare user variable to fetch the users data from database via axios
  const[user, setUser] = useState([]);
  /*
  via axios method
  const fetchData = () => {
    return axios.get('http://127.0.0.1:8000/api/users')
    .then((response) => setUser(response.data['users']));
  }
  */
 
  // via fetch method
  const fetchData = () => {
    return fetch('http://127.0.0.1:8000/api/users')
    .then((response) => response.json())
    .then((data) => setUser(data['users']));
  }

  useEffect(() => {
    fetchData();
  }, [])
  return (
    <div className="App">
      <Home/>
      <Function/>
      <h1>Welcome React</h1>
      <span>{ text }</span>
      <br/>
      <button>Simple Button</button>
      <Button>Bootstrap Button</Button>
      <h1>User List</h1>
      <ul>
        { user && user.length > 0 && user.map((userObj, index) => (
          <li key={userObj.id}>
            { userObj.name } - { userObj.email }
          </li>
        )) }
      </ul>
    </div>
  );
}

export default App;
