import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
  const inputFieldData = {
    name: {
      firstname: "",
    },
    email: "",
    password: "",
    phone: "",
    address: {
      city: "",
    },
  };
  const [inputData, setInputData] = useState(inputFieldData);
  const navigate = useNavigate();

  // const inputHandler = (e) => {
  //   // console.log({ [e.target.name]: e.target.value });
  //   setInputData({ ...inputData, [e.target.name]: e.target.value });
  // };

  const inputHandler = (e) => {
    // Nested - Object
    if (e.target.name === "firstname") {
      setInputData({
        ...inputData,
        name: { ...inputData.name, [e.target.name]: e.target.value },
      });
    } else if (e.target.name === "city") {
      setInputData({
        ...inputData,
        address: { ...inputData.address, [e.target.name]: e.target.value },
      });
    } else {
      setInputData({ ...inputData, [e.target.name]: e.target.value });
    }
  };

  // Got the input field data that send in API when submit the form
  const submitHandler = (e) => {
    e.preventDefault();
    // console.log("Input Data before POST:", inputData);

    axios
      .post("https://fakestoreapi.com/users", inputData)
      .then((res) => {
        console.log("New Added Data :", inputData);
        setInputData(inputFieldData); //  reset form after submission
        // setInputData({
        //   name: "",
        //   email: "",
        //   password: "",
        //   phone: "",
        //   city: "",
        // });
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  // With Fetch - Method
  // const submitHandler = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/posts",
  //       {
  //         method: "POST",
  //         body: JSON.stringify(inputData),
  //         headers: {
  //           "Content-type": "application/json; charset=UTF-8",
  //         },
  //       }
  //     );
  //     const data = await response.json();
  //     // console.log("Added New User - Data  : ", data);
  //     setInputData(data);
  //     setInputData(inputFieldData);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div>
      <div className="col-6 mx-auto shadow p-3 ">
        <form onSubmit={submitHandler}>
          <div class="mb-3">
            <label class="form-label">Name</label>
            <input
              type="text"
              class="form-control"
              name="firstname"
              onChange={inputHandler}
              value={inputData.name?.firstname}
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
            <label class="form-label">Password</label>
            <input
              type="text"
              class="form-control"
              name="password"
              onChange={inputHandler}
              value={inputData.password}
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Phone</label>
            <input
              type="text"
              class="form-control"
              name="phone"
              onChange={inputHandler}
              value={inputData.phone}
            />
          </div>
          <div class="mb-3">
            <label class="form-label">City</label>
            <input
              type="text"
              class="form-control"
              name="city"
              onChange={inputHandler}
              value={inputData.address?.city}
            />
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" class="btn btn-success btn-lg">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Create;
