import React from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';


export default class ExpenseForm extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      expenseField: '',
      dateField: '',
      category: ''
    }
  }

  handleInputChange = (e) => {
    this.setState({
      expenseField: e.target.value
    })
  }

  handleDateChange = (e, date) => {
    this.setState({
      dateField: date
    });
  }

  handleCategoryChange = (e,k,value) => {
    this.setState({
      category: value
    });
  }

  handleSave = () => {
    const {expenseField, dateField, category} = this.state;
    this.props.saveExpense(expenseField, dateField, category);
    this.props.closeForm();
  }

  render() {

    const actions = [
     <FlatButton
       label="Cancel"
       primary={true}
       onClick={this.props.closeForm}
     />,
     <RaisedButton
       label="Save"
       primary={true}
       onClick={this.handleSave}
     />,
   ];

    return(
      <Dialog
         title="Add new expense"
         actions={actions}
         modal={false}
         open={this.props.open}
         onRequestClose={this.props.closeForm}
       >

       <div>
         <TextField hintText="enter expense" value={this.state.expenseField} onChange={ (e) => { this.handleInputChange(e) }}/>
       </div>

       <DatePicker hintText="enter date" value={this.state.dateField} onChange={ (e, date) => {this.handleDateChange(e, date)} }/>

       <div>
         <SelectField
           floatingLabelText="Category"
           value={this.state.category}
           onChange={this.handleCategoryChange}
         >
           { this.props.categories.map(cat => <MenuItem value={cat} primaryText={cat} />)}

         </SelectField>
       </div>

       </Dialog>
    )
  }
}
