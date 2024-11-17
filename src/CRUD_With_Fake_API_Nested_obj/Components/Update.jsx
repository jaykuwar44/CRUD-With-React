import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Update() {
  const [updateData, setUpdateData] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  // const inputEditHandler = (e) => {
  //   // console.log(`${e.target.name} : ${e.target.value}`);
  //   // setUpdateData(e.target.value);
  //   console.log({ ...updateData, [e.target.name]: e.target.value });
  //   setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  // };

  const inputEditHandler = (e) => {
    // const { name, value } = e.target;

    if (e.target.name === "firstname") {
      setUpdateData({
        ...updateData,
        name: { ...updateData.name, firstname: e.target.value },
      });
    } else if (e.target.name === "city") {
      setUpdateData({
        ...updateData,
        address: { ...updateData.address, city: e.target.value },
      });
    } else {
      // setUpdateData({ ...updateData, [name]: value });
      setUpdateData({ ...updateData, [e.target.name]: e.target.value });
    }
  };

  const updateHandler = (e) => {
    e.preventDefault();

    axios
      .put(`https://fakestoreapi.com/users/${id}`, updateData)
      .then((res) => {
        setUpdateData(res.data);
        console.log("Updated - Data : ", res.data);
        setUpdateData({
          name: { firstname: "" },
          email: "",
          password: "",
          phone: "",
          address: { city: "" },
        });
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  // With Fetch - Method

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/users/${id}`)
      .then((res) => {
        // console.log("-----------", res);
        setUpdateData(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      {updateData ? (
        <>
          <div className="d-flex justify-content-center align-items-center min-vh-100">
            <div className="card col-6 mx-auto p-3 ">
              <form>
                <div class="mb-3">
                  <label class="form-label">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    name="firstname"
                    onChange={inputEditHandler}
                    value={updateData.name?.firstname || ""}
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
                  <label class="form-label">Password</label>
                  <input
                    type="text"
                    class="form-control"
                    name="password"
                    onChange={inputEditHandler}
                    value={updateData.password || ""}
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Phone</label>
                  <input
                    type="text"
                    class="form-control"
                    name="phone"
                    onChange={inputEditHandler}
                    value={updateData.phone || ""}
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">City</label>
                  <input
                    type="text"
                    class="form-control"
                    name="city"
                    onChange={inputEditHandler}
                    value={updateData.address?.city || ""}
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
      ) : (
        <h2 className="d-flex justify-content-center align-items-center h-100">
          Loading....!
        </h2>
      )}
    </div>
  );
}

export default Update;
