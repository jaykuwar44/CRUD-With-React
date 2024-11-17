import React from "react";
import CRUD_Comp from "./CRUD_With_mockAPI/CRUD_Comp";
import CRUD_Nav from "./CRUD_With_Fake_API_Nested_obj/Components/CRUD_Nav";
import CRUD_With_Comman_API_Fun from "./Comman_API_Function/CRUD_With_Comman_API_Fun";

function App() {
  return (
    <div>
      {/* <CRUD_Comp /> */}
      {/* <CRUD_Nav /> */}
      <CRUD_With_Comman_API_Fun />
    </div>
  );
}

export default App;
