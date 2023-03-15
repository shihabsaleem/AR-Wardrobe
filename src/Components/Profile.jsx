import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Style/profile.scss';

const Profile = () => {
  const [user, setUser] = useState({});
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users/1')
      .then(res => setUser(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleBioChange = e => {
    setBio(e.target.value);
  };

  const handleSave = () => {
    axios.put(`https://jsonplaceholder.typicode.com/users/${user.id}`, { name, bio })
      .then(res => setUser(res.data))
      .catch(err => console.log(err));
  };

  const handleDelete = () => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${user.id}`)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return (
    <div className="profile-container">
      <img className="profile-image" src={user.image} alt={user.name} />
      <div className="profile-info">
        <h1 className="profile-name">{user.name}</h1>
        <p className="profile-bio">{user.bio}</p>
        <div className="profile-edit">
          <input type="text" placeholder="Name" value={name} onChange={handleNameChange} />
          <textarea placeholder="Bio" value={bio} onChange={handleBioChange} />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
