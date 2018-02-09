import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {FloatingActionButton} from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';

import FontIcon from 'material-ui/FontIcon';

import AppBar from 'material-ui/AppBar';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import DatePicker from 'material-ui/DatePicker';

import ExpensesList from './components/expenses-list';

import Snackbar from 'material-ui/Snackbar';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;

class App extends Component {


  constructor(props){
    super(props);

    this.state = {
      expenseField: "",
      expenses: [
        {amount: "100.00", date: "2001-01-01"}
      ],
      snackbar: false
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      snackbar: true
    })
  }

  handleInputChange = (e) => {
    this.setState({
      expenseField: e.target.value
    })
    console.log(e.target.value);
  }

  render() {
    return (
      <MuiThemeProvider >
        <div className="App">

          <AppBar title="XTrack"/>

          <div>
            <TextField hintText="enter expense" onChange={ (e) => { this.handleInputChange(e) }}/>
          </div>

          <DatePicker hintText="enter date"/>


          <FloatingActionButton onClick={this.handleSubmit}>
            <ContentAdd/>
          </FloatingActionButton>

          <ExpensesList expenses={this.state.expenses} />

          <Snackbar
            open={this.state.snackbar}
            message="Expense added!"
            autoHideDuration={1000}
            onRequestClose={this.handleRequestClose}
          />


          <BottomNavigation selectedIndex={this.state.selectedIndex} style={{background: "lightgrey"}}>
            <BottomNavigationItem
              label="Recents"
              icon={recentsIcon}
            />
            <BottomNavigationItem
              label="Favorites"
              icon={favoritesIcon}
            />
            <BottomNavigationItem
              label="Nearby"
              icon={recentsIcon}
            />
          </BottomNavigation>
        </div>
      </MuiThemeProvider>

    );
  }
}

export default App;
