import React, { useEffect } from "react";
import { apiRequest } from "../Comman/Utils";
import { useNavigate, useParams } from "react-router-dom";

function Delete() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    apiRequest("delete", id).then((res) => {
      // console.log("Delete : ", res.data);
      navigate("/");
    });
  }, [id]);
  return <div></div>;
}

export default Delete;
