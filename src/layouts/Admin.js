import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";

// views

import Dashboard from "views/admin/Dashboard.js";
import Tables from "views/admin/Tables.js";

export default function Admin() {
  const screen_height = 'calc(100vh - 56px)';
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-black }">
        <AdminNavbar />
        {/* Header */}

        <div className="px-4 md:px-10 mx-auto w-full -m-24 height-{$screen_height}">
          <Switch>
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route path="/admin/tables" exact component={Tables} />
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
        </div>
      </div>
    </>
  );
}
