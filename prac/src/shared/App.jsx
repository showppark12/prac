import React from 'react';
import { Route } from 'react-router-dom';
import { Intro, Login, Main } from 'pages';
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Container } from '@material-ui/core';
import '../style/App.css'
const App = () => {
    return (
        <>
            <Header />
            <Container id = "content">
                <Route exact path="/" component={Intro} />
                <Route path="/login" component={Login} />
                <Route path="/main" component={Main} />
            </Container>
            <Footer />
        </>
    )
}
export default App;