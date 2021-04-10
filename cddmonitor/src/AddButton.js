import React from 'react';

function AddButton (props,alertClass){
    return (
        <button className={`btn btn-${props.alertClass} fas fa-plus-circle`}/>
    );
  }


export default AddButton;