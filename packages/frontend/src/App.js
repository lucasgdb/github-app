import React from 'react'
import Header from './components/Header'
import Main from './components/UserList'
import Footer from './components/Footer'
import './App.css'

export default class App extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Main />
                <Footer />
            </>
        )
    }
}
