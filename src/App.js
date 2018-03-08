import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {FloatingActionButton} from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';

import FontIcon from 'material-ui/FontIcon';

import AppBar from 'material-ui/AppBar';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import MenuItem from 'material-ui/MenuItem';

import Drawer from 'material-ui/Drawer';

import ExpenseForm from './components/expense-form';
import CategoryForm from './components/category-form';
import ExpensesList from './components/expenses-list';
import CategoriesList from './components/categories-list';

import Snackbar from 'material-ui/Snackbar';

import {Tabs, Tab} from 'material-ui/Tabs';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';
const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;

class App extends Component {


  constructor(props){
    super(props);

    const categories = JSON.parse(localStorage.getItem('categories')) || [];
    console.log(categories);

    this.state = {

      expenses: [
        {amount: "100.00", date: "2001-01-01", category: "Car"}
      ],
      categories: categories,
      snackbar: false,
      drawer: false,
      expenseForm: {
        open: false
      },
      categoryForm: {
        open: false
      }
    }
  }

  saveExpense = (amount, date, category) => {

    this.setState({
      expenses: [...this.state.expenses,
        {
          amount,
          date,
          category
        }],
      message: "Expense added!",
      snackbar: true
    })
  }

  handleDrawer = () => {
    this.setState({ drawer: !this.state.drawer})
  }


  saveCategory = (categoryField) => {

    const categories = [...this.state.categories, categoryField];
    this.setState({
      message: "Category saved!",
      snackbar:true,
      categories: categories,
    });

    localStorage.setItem('categories', JSON.stringify(categories));
  }

  handleSnackbarClose = () => {
    this.setState({
      snackbar: false,
      message: ""
    })
  }

  render() {
    return (
      <MuiThemeProvider >
        <div className="App">

          <Drawer open={this.state.drawer}>
            <AppBar onClick={()=> this.setState({drawer:false})} iconElementRight={<IconButton><NavigationClose /></IconButton>}/>
            <MenuItem onClick={()=> this.setState({drawer:false})}>Profile</MenuItem>
            <MenuItem onClick={()=> this.setState({drawer:false})}>Settings</MenuItem>
          </Drawer>

          <AppBar title="XTrack" onLeftIconButtonClick={this.handleDrawer}/>

          <Tabs>
            <Tab label="Expenses">

              <Card>
                <ExpensesList expenses={this.state.expenses} />
              </Card>

              <ExpenseForm
                open={this.state.expenseForm.open}
                closeForm={()=>this.setState({expenseForm:{open:false}})}
                categories={this.state.categories}
                saveExpense={this.saveExpense}
              />

              <FloatingActionButton className="AddButton" onClick={()=>this.setState({expenseForm:{open:true}})} >
                <ContentAdd/>
              </FloatingActionButton>
            </Tab>

            <Tab label="Categories">
              <CategoriesList categories={this.state.categories} />

                <CategoryForm
                  open={this.state.categoryForm.open}
                  closeForm={()=>this.setState({categoryForm:{open:false}})}
                  saveCategory={this.saveCategory}
                />

              <FloatingActionButton className="AddButton" onClick={()=>this.setState({categoryForm:{open:true}})} >
                <ContentAdd/>
              </FloatingActionButton>

            </Tab>
          </Tabs>
          <Snackbar
            ref={snackbar => this.snackbar = snackbar}
            open={this.state.snackbar}
            message={this.state.message}
            autoHideDuration={1000}
            onRequestClose={this.handleSnackbarClose}
          />
        </div>
      </MuiThemeProvider>

    );
  }
}

export default App;
