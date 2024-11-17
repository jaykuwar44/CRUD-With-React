import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Delete() {
  const { id } = useParams();
  const navigate = useNavigate();
  // console.log(id);

  useEffect(() => {
    axios
      .delete(`https://fakestoreapi.com/users/${id}`)
      .then((res) => {
        console.log("Deleted - Data : ", res.data);
        navigate("/");
      })
      .catch((err) => console.log(err));
  });

  // with fetch - method
  // const deleteUser = async () => {
  //   try {
  //     const response = await fetch(`https://fakestoreapi.com/users/${id}`, {
  //       method: "DELETE",
  //     });
  //     const data = await response.json();
  //     console.log("Deleted - Data : ", data);
  //     navigate("/");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // deleteUser();

  return (
    <div>
      <h2 className="d-flex justify-content-center align-items-center h-100">
        Delete
      </h2>
    </div>
  );
}

export default Delete;
