import React, { useState } from "react";
import { apiRequest } from "../Comman/Utils";
import { useNavigate } from "react-router-dom";

function Create() {
  const inputName = { name: "", email: "", age: "" };
  const [inputData, setInputData] = useState(inputName);
  const navigate = useNavigate();

  const inputHandler = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // Check JSON Placeholder for how to use API METHODS & how to pass id & data in API
    // inputData :=> written after comma, which data is post
    apiRequest("post", "", inputData).then((res) => {
      setInputData(res.data);
      navigate("/");
      setInputData({ name: "", email: "", age: "" }); // reset input field after submission
    });
  };

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post("https://66c968578a477f50dc309087.mockapi.io/crud", inputData)
  //     .then((res) => {
  //       setInputData(res.data);
  //     });
  // };

  return (
    <div className="col-6 mx-auto shadow p-3 ">
      <form onSubmit={submitHandler}>
        <div class="mb-3">
          <label class="form-label">Name</label>
          <input
            type="text"
            class="form-control"
            name="name"
            onChange={inputHandler}
            value={inputData.name}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            name="email"
            onChange={inputHandler}
            value={inputData.email}
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Age</label>
          <input
            type="number"
            class="form-control"
            name="age"
            onChange={inputHandler}
            value={inputData.age}
          />
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" class="btn btn-success btn-lg">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Create;
