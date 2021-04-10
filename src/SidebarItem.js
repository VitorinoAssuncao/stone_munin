import React from 'react';

function SidebarItem (props,icon,value){
    return (
      <li className="nav-item">
        <a className="nav-link" href="#">
        <span className={`fas fa-${props.icon} m-1`}></span>
         {props.value}
      </a>
    </li>
    );
  }


export default SidebarItem;