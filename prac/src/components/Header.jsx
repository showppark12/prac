import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Header.css'
import Container from '@material-ui/core/Container';
const Header = () => {
    return (
        <header>
            <Container id ="headerContainer" maxWidth ="lg">
                <h1>logo</h1>
                <div id="login">login</div>
            </Container>
        </header>
    )
}
export default Header;



