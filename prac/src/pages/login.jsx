import React from 'react';
import Header from '../components/Header'
import { Link } from 'react-router-dom';
const login = () => {
    return (
        <>
            <Header />
            <div>login</div>
            <Link to="/main">로그인 하기</Link>
        </>
    )
}

export default login;