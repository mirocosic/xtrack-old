import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';


export default class ExpensesList extends React.Component {
  render(){

    const expenses = this.props.expenses || [];

    return(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Status</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableRowColumn>1</TableRowColumn>
            <TableRowColumn>Amount</TableRowColumn>
            <TableRowColumn>Date</TableRowColumn>
          </TableRow>

          { expenses.map( expense => {
            return (<TableRow>
              <TableRowColumn>1</TableRowColumn>
              <TableRowColumn>{expense.amount}</TableRowColumn>
              <TableRowColumn>{expense.date}</TableRowColumn>
            </TableRow>
          )
          })}

        </TableBody>
      </Table>
    );
  }
}
