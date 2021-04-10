import React from 'react';

function TableRow(props,rowValue, alertClass){
    return(
            <tr>
              <th scope="row">{props.rowValue}</th>
              {props.children}
            </tr>
    );
  }


export default TableRow;