
import './App.css';
import {useEffect,useState} from 'react';

function App() {
  return (
    <div className="App">
      <LoadUsers></LoadUsers>
    </div>
  );
}
function LoadUsers (){
  const [users,setUsers] = useState([]);
  useEffect( () =>{
    
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))

  }, []);
  return(
    <div>
   {
users.map(user => <User name={user.name} email={user.email}></User>)
}
    </div>
  )
}
function User(props){
  return (
    <div className='user'>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
    </div>
  )
}

export default App;
