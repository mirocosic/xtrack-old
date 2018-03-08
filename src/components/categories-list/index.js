import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';


export default class CategoriesList extends React.Component {
  render(){

    const categories = this.props.categories || [];

    return(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>

            <TableHeaderColumn>Name</TableHeaderColumn>

          </TableRow>
        </TableHeader>
        <TableBody>

          { categories.map( (category, idx) => {
            return (<TableRow key={idx}>
              <TableRowColumn>{idx}</TableRowColumn>
              <TableRowColumn>{category || ""}</TableRowColumn>
            </TableRow>
          )
          })}

        </TableBody>
      </Table>
    );
  }
}
