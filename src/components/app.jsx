import React from 'react';
import './css/app.css';
////Components
import Friends from './friends';
import Rooms from './rooms';
import Mainp from './mainp';

const App = () => {
    return (
        <div>
            <Rooms/>
            <Friends/>
            <Mainp/>
        </div>
    )
}

export default App;
