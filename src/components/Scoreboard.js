import React from 'react';
import '../css/Scoreboard.css';

class Scoreboard extends React.Component {
    render(){
        return (
            <div className='scoreboard'>
                <h1>Scoreboard</h1>
                <teamScore />
            </div>
        );
    }
}

export default Scoreboard;
