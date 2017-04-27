import React from 'react';
import $ from 'jquery';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
// import ActionInfo from 'material-ui/svg-icons/action/info';

export default class Scoreboard extends React.Component {
    constructor() {
       super();
       this.state = { items: [] };
    }
    componentDidMount() {

        const scoreboardUrl = 'http://localhost:8000/api/scoreboard';

        $.ajax({
            url : scoreboardUrl,
            dataType: "json",
            type: 'GET'
        }).done(function( data ){
            this.setState({items:data});
        }.bind(this));
    }

    render(){
        return (
            <List>
                {this.state.items.map(function(item, key) {
                    return(
                        <ListItem
                            key={item.id}
                            leftAvatar={<Avatar src={item.avatar} />}
                            primaryText={item.vp}
                            secondaryText={item.score + " points"}
                        />
                    )
                })}
            </List>
        );
    }
}
