import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Delete() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .delete(`https://66c968578a477f50dc309087.mockapi.io/crud/${id}`)
      .then((res) => {
        // console.log("Delete : ", res.data);
        navigate("/");
      });
  }, [id]);
  return <div></div>;
}

export default Delete;
