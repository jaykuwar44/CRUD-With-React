import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Create() {
  const inputName = { name: "", email: "", age: "", gender: "Male" };
  const [inputData, setInputData] = useState(inputName);
  const navigate = useNavigate();

  const inputHandler = (e) => {
    // console.log("InputData : ", {
    //   [e.target.name]: e.target.value,
    // });
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // Used JSON Placeholder for how to use API METHODS & how to pass id & data in API
    axios
      .post("https://66c968578a477f50dc309087.mockapi.io/crud", inputData)
      // inputData :=> written after comma, which data is post
      .then((res) => {
        setInputData(res.data);
        navigate("/");
        setInputData({ name: "", email: "", age: "", gender: "" }); // reset input field after submission
      });
  };

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
            required
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
        <div className="mb-3">
          <label className="form-label">Gender</label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              value="Male"
              checked={inputData.gender === "Male"}
              onChange={inputHandler}
            />
            <label className="form-check-label">Male</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              value="Female"
              checked={inputData.gender === "Female"}
              onChange={inputHandler}
            />
            <label className="form-check-label">Female</label>
          </div>
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
