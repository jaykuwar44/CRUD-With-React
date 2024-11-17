import React, { useEffect, useState } from "react";
import { apiRequest } from "../Comman/Utils";
import { useNavigate, useParams } from "react-router-dom";

function Update(props) {
  const [updateData, setUpdateData] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const inputEditHandler = (e) => {
    // e.target.value;
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  // Fetch the existing data when the component render
  useEffect(() => {
    apiRequest("get", id)
      .then((res) => {
        // console.log("Read Update Data : ", res.data);
        setUpdateData(res.data); // Set the fetched data into state
      })
      .catch((err) => {
        console.log("Error : ", err);
      });
  }, [id]); // useEffect will run whenever id value change

  const updateHandler = (e) => {
    e.preventDefault();
    apiRequest("put", id, updateData)
      .then((res) => {
        setUpdateData({ name: "", email: "", age: "" });
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
                type="number"
                class="form-control"
                name="age"
                onChange={inputEditHandler}
                value={updateData.age || ""}
              />
            </div>
            <div className="d-flex justify-content-between mt-4">
              <button
                type="submit"
                class="btn btn-outline-dark px-4"
                onClick={() => navigate("/")}
              >
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
