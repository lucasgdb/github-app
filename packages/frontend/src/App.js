import React from 'react'
import Header from './components/Header'
import Main from './pages/main'

export default class App extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Main />
            </>
        )
    }
}
