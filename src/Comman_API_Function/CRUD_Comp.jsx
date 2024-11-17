import React from "react";
import { Route, Routes } from "react-router-dom";
import TableData from "./Component/TableData";
import Create from "./Component/Create";
import Update from "./Component/Update";
import Read from "./Component/Read";
import Delete from "./Component/Delete";
import Navbar from "./Component/Navbar";

function CRUD_Comp() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<TableData />}></Route>
        <Route path="/add-user" element={<Create />}></Route>
        <Route path="/read-user/:id" element={<Read />} />
        <Route path="/edit-user/:id" element={<Update />}></Route>
        <Route path="/delete-user/:id" element={<Delete />} />
      </Routes>
    </div>
  );
}

export default CRUD_Comp;
