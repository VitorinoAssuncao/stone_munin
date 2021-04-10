import React from 'react';

function Table(props){
    return(
      <div className="table-responsive">
        <table className="table table-striped table-hover table-sm">
          {props.children}
        </table>
      </div>
    );
  }


export default Table;