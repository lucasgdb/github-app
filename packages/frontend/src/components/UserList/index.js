import React, { useState, useEffect, useRef } from 'react';
import api, { githubApi } from '../../services/api';
import './index.css';

const UserList = () => {
  const [userName, setUserName] = useState('');
  const [users, setUsers] = useState([]);
  const txtLogin = useRef(null);

  async function getAllUsers() {
    const response = await api.get('/users');

    setUsers(response.data);
  }

  function onChange() {
    setUserName(txtLogin.current.value);
  }

  async function createUser() {
    if (userName) {
      const response = (await githubApi.get(userName)).data;
      const {
        login,
        avatar_url: avatarURL,
        html_url: htmlURL,
        name,
        bio,
        public_repos: publicRepos,
        followers,
      } = response;

      await api.post('/users', {
        login,
        avatar_url: avatarURL,
        html_url: htmlURL,
        name,
        bio,
        public_repos: publicRepos,
        followers,
      });

      txtLogin.current.value = '';

      getAllUsers();
    }
  }

  async function removeUser(url) {
    await api.delete(url);

    getAllUsers();
  }

  function enterPressed(event) {
    if (event.keyCode === 13) createUser();
  }

  useEffect(() => { getAllUsers(); }, []);

  return (
    <main onKeyUp={(event) => enterPressed(event)}>
      <section className="add-user-list">
        <div>
          <strong>Add a new user</strong>

          <input ref={txtLogin} defaultValue={userName} onKeyUp={onChange} placeholder="Type here the GitHub's username" type="text" />

          <button onClick={createUser} title="Add a user">Add user</button>
        </div>
      </section>

      <section className="user-list">
        {users.map((user) => (
          <article key={user._id}> {/* eslint-disable-line no-underscore-dangle */}
            <div>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer nofollow">
                <img title={`${user.name} (${user.login})`} src={user.avatar_url} alt={user.name} />
                <strong>{user.name}</strong>
              </a>
              <small>{user.public_repos} repos and {user.followers} followers</small>
            </div>
            <p>{user.bio ? user.bio : 'This user does not have a bio.'}</p>

            <button title="Remove this user" onClick={() => removeUser(`/users/${user._id}`)}>Remove</button> {/* eslint-disable-line no-underscore-dangle */}
          </article>
        ))}
      </section>
    </main>
  );
};

export default UserList;
