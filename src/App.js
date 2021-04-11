import React from 'react';
import Sidebar from './Sidebar';
import SidebarItem from './SidebarItem';

import Table from './Table';
import TableHeader from './TableHeader';

import Stocks from './Stock';

import './index.css';

function App() {
  return (
    <div>
      <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
        <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="cddmonitor.herokuapp.com"><img src='https://i.imgur.com/n8skBsp.png' alt='logo stone' /></a>
      </nav>

      <div className="container-fluid">
      <div className="row">
        <Sidebar>
          <SidebarItem icon="home" value="Dashboard" />
          <SidebarItem icon="ticket-alt" value="Tickets" />
          <hr />
          <SidebarItem icon="users-cog" value="Configuration" />
        </Sidebar>

        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <h1 className="h2 text-success">Dashboard</h1>
          <Table>
              <thead className="thead-dark">
                <tr>
                  <TableHeader value="ID" />
                  <TableHeader value="CDD" />
                  <TableHeader value="Estoque" />
                  <TableHeader value="Media" />
                  <TableHeader value="Requisição" />
                </tr>
              </thead>

                <Stocks />

            </Table>
        </main>
      </div>
    </div>
    </div>
  );
}

export default App;
