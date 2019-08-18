import React, { useState, useEffect, useRef } from 'react'
import api, { github_api } from '../../services/api'
import './index.css'

const UserList = () => {
    const [login, setLogin] = useState('')
    const [users, setUsers] = useState([])
    const txtLogin = useRef(null)

    useEffect(() => { getAllUsers() }, [])

    async function getAllUsers() {
        const response = await api.get('/users')

        setUsers(response['data'])
    }

    function onChange() {
        setLogin(txtLogin['current']['value'])
    }

    async function createUser() {
        txtLogin['current']['value'] = ''
        const response = await github_api.get(login)
        await api.post('/users', response['data'])

        getAllUsers()
    }

    async function removeUser(url) {
        await api.delete(url)

        getAllUsers()
    }

    function enterPressed(event) {
        if (event.keyCode === 13) createUser()
    }

    return (
        <main onKeyUp={event => enterPressed(event)}>
            <section className="add-user-list">
                <div>
                    <strong>Add a new user</strong>

                    <input ref={txtLogin} defaultValue={login} onKeyUp={onChange} placeholder="Type here the GitHub's username" type="text" />

                    <button onClick={createUser} title="Add a user">Add user</button>
                </div>
            </section>

            <section className="user-list">
                {users.map(user => (
                    <article key={user['_id']}>
                        <div>
                            <img title={`${user['name']} (${user['login']})`} src={user['avatar_url']} alt={user['name']} />
                            <strong>{user['name']}</strong>
                        </div>
                        <p>{user['bio'] ? user['bio'] : 'This user does not have a bio.'}</p>

                        <button title="Remove this user" onClick={() => removeUser(`/users/${user['_id']}`)}>Remove</button>
                    </article>
                ))}
            </section>
        </main>
    )
}

export default UserList
