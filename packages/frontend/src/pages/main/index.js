import React from 'react'
import api from '../../services/api'
import './index.css'

export default class Main extends React.Component {
    constructor() {
        super()

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        this.getResponse()
    }

    async getResponse() {
        const data = await api.get('/users')

        this.setState({ users: data['data'] })
    }

    render() {
        const { users } = this.state

        return (
            <div className="user-list">
                {users.map(user => (
                    <article key={user['_id']}>
                        <strong>{user['_name']}</strong>
                        <p>{user['_bio']}</p>

                        <a href="#dfjdkf">Acessar</a>
                    </article>
                ))}
            </div>
        )
    }
}
