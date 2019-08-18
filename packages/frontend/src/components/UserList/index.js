import React from 'react'
import api, { github_api } from '../../services/api'
import './index.css'

export default class UserList extends React.Component {
    constructor() {
        super()

        this.state = {
            login: '',
            users: []
        }

        this.txtLogin = React.createRef()
        this.onChange = this.onChange.bind(this)
        this.createUser = this.createUser.bind(this)
        this.removeUser = this.removeUser.bind(this)
        this.enterPressed = this.enterPressed.bind(this)
    }

    componentDidMount() {
        this.getAllUsers()
    }

    onChange() {
        this.setState({ login: this.txtLogin['current']['value'] })
    }

    async getAllUsers() {
        const response = await api.get('/users')

        this.setState({ users: response['data'] })
    }

    async createUser() {
        this.txtLogin.current.value = ''
        const response = await github_api.get(this.state['login'])
        await api.post('/users', response['data'])

        this.getAllUsers()
    }

    async removeUser(url) {
        await api.delete(url)

        this.getAllUsers()
    }

    async enterPressed(event) {
        if (event.keyCode === 13) this.createUser()
    }

    render() {
        const { users } = this.state

        return (
            <main onKeyUp={event => this.enterPressed(event)}>
                <section className="add-user-list">
                    <div>
                        <strong>Add a new user</strong>

                        <input ref={this.txtLogin} defaultValue={this.state['login']} onKeyUp={this.onChange} placeholder="Type here the GitHub's username" type="text" name="login" />

                        <button onClick={this.createUser} title="Add a user">Add user</button>
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

                            <button title="Remove this user" onClick={() => this.removeUser(`/users/${user['_id']}`)}>Remove</button>
                        </article>
                    ))}
                </section>
            </main>
        )
    }
}
