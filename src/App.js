import { useState } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState({})
  const [name, setName] = useState('')

  const githubUsers = async () => {
    const api = await fetch(`https://api.github.com/users/${name}`)
    const data = await api.json();
    console.log(api);
    console.log(data);
    setUser(data)
  }
  console.log(name);

  const handelSubmit = (e) => {
    e.preventDefault()
    githubUsers()
    setName('')
  }

  return (
    <div>
      <div className='container'>
        <div className='body-div'>
          <h2 className='heading'>Github Profile Finder</h2>
          <div className='img-div'><img src={user.avatar_url ? user.avatar_url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhOaaBAY_yOcJXbL4jW0I_Y5sePbzagqN2aA&usqp=CAU"} alt="avatar" /></div>
          <div className='pra-div'>
            <div className='pra-1'><p>Followers {user.followers}</p></div>
            <div className='pra-2'><p>Following {user.following}</p></div>
          </div>
          <form action="" onSubmit={handelSubmit}>
            <div className='input-div'><input type="text" placeholder='Enter Username' value={name} onChange={(e) => setName(e.target.value)} required /></div>
            <div className='btn-div'><button onClick={() => githubUsers()}> Find User</button></div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
