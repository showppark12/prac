import React from 'react';
import { Route } from 'react-router-dom';
import { Intro, login, main } from 'pages';

const App = () => {
    return (
        <div>
            <Route exact path="/" component={Intro} />
            <Route path="/login" component={login} />
            <Route path="/main" component={main} />


        </div>
    )
}
export default App;