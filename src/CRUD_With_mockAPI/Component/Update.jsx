import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Update() {
  const [updateData, setUpdateData] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  // Fetch the existing data when the component render
  useEffect(() => {
    axios
      .get(`https://66c968578a477f50dc309087.mockapi.io/crud/${id}`)
      .then((res) => {
        setUpdateData(res.data); // Set the fetched data into state
      })
      .catch((err) => {
        console.log("Error : ", err);
      });
  }, [id]); // useEffect will run whenever id value change

  const inputEditHandler = (e) => {
    // console.log("edit--data : ", { [e.target.name]: e.target.value });
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  const updateHandler = (e) => {
    e.preventDefault();
    axios
      .put(`https://66c968578a477f50dc309087.mockapi.io/crud/${id}`, updateData)
      .then((res) => {
        setUpdateData({ name: "", email: "", age: "", gender: "" });
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="card col-6 mx-auto p-3 ">
          <form>
            <div class="mb-3">
              <label class="form-label">Name</label>
              <input
                type="text"
                class="form-control"
                name="name"
                onChange={inputEditHandler}
                value={updateData.name || ""}
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
                onChange={inputEditHandler}
                value={updateData.email || ""}
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Age</label>
              <input
                type="text"
                class="form-control"
                name="age"
                onChange={inputEditHandler}
                value={updateData.age || ""}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Gender</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  // id="male"
                  value="Male"
                  checked={updateData.gender === "Male"}
                  onChange={inputEditHandler}
                />
                <label className="form-check-label">Male</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  // id="female"
                  value="Female"
                  checked={updateData.gender === "Female"}
                  onChange={inputEditHandler}
                />
                <label className="form-check-label">Female</label>
              </div>
            </div>
            <div className="d-flex justify-content-between mt-4">
              <button type="submit" class="btn btn-outline-dark px-4">
                Back
              </button>
              <button
                type="submit"
                class="btn btn-success px-4"
                onClick={updateHandler}
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Update;
