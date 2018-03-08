import React from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';


export default class CategoryForm extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      categoryField: ''
    }
  }

  handleNewCategoryChange = (e) => {
    this.setState({
      categoryField: e.target.value
    })
  }

  handleSave = () => {
    this.props.saveCategory(this.state.categoryField);
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
         title="Add new category"
         actions={actions}
         modal={false}
         open={this.props.open}
         onRequestClose={this.props.closeForm}
       >

       <div>
         <TextField hintText="enter category name" value={this.state.categoryField}
           onChange={ (e) => { this.handleNewCategoryChange(e) }}
         />
       </div>

       </Dialog>
    )
  }
}
