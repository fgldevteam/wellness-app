import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Scoreboard from './components/Scoreboard';

const styles = {
  container: {
    textAlign: 'center',
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

export default class App extends Component {
  constructor(props, context) {

    super(props, context);

    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);

    this.state = {
      open: false,
    };
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  handleTouchTap() {
    this.setState({
      open: true,
    });
  }

  handleSubmitActiviyForm() {
    alert("send the form");
  }

  render() {

      const actions = [
        <FlatButton label="Cancel" primary={true} onTouchTap={this.handleRequestClose} />,
        <RaisedButton label="Submit" primary={true} onTouchTap={this.handleSubmitActiviyForm} />,
      ];

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>

          <h1>Scoreboard</h1>
          <Scoreboard />


          <RaisedButton
            label="Log Your Activities"
            secondary={true}
            onTouchTap={this.handleTouchTap}
          />

          <Dialog
            open={this.state.open}
            title="Log your Activities"
            actions={actions}
            onRequestClose={this.handleRequestClose}
          >

          <TextField
              hintText="your.name@fglsports.com"
              floatingLabelText="Your e-mail address"
              fullWidth={true}
            /><br />

            <h3 style={styles.headline}>Your Activities</h3>
            <Checkbox label="Simple" style={styles.checkbox} />
            <Checkbox label="Simple" style={styles.checkbox} />
            <Checkbox label="Simple" style={styles.checkbox} />
            <Checkbox label="Simple" style={styles.checkbox} />

          </Dialog>
        </div>
      </MuiThemeProvider>
    );
  }
}
