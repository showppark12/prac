import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Header.css'
import Container from '@material-ui/core/Container';
const Header = () => {
    return (
        <div className = "header">
            <Container id="headerContainer" maxWidth ="lg">
                <div>logo</div>
                <div id="login"><Link to ='/login'>login</Link></div>
            </Container>
        </div>
    )
}
export default Header;



