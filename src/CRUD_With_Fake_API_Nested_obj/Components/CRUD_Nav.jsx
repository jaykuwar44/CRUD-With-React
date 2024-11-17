import React from "react";
import { Routes, Route } from "react-router-dom";
import TableData from "./TableData";
import Create from "./Create";
import Read from "./Read";
import Update from "./Update";
import Delete from "./Delete";
import Navbar from "./Navbar";

function CRUD_Nav() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<TableData />}></Route>
        <Route path="/add-user" element={<Create />}></Route>
        <Route path="/read-user/:id" element={<Read />}></Route>
        <Route path="/edit-user/:id" element={<Update />}></Route>
        <Route path="/delete-user/:id" element={<Delete />}></Route>
      </Routes>
    </div>
  );
}

export default CRUD_Nav;
