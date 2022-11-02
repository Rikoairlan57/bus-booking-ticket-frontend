import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { message } from "antd";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const validateToken = async () => {
    try {
      const response = await axios.post(
        "/api/users/get-user-by-id",
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.data.success) {
        setLoading(false);
      } else {
        setLoading(false);
        localStorage.removeItem("token");
        message.error(response.data.message);
        navigate("/login");
      }
    } catch (error) {
      localStorage.removeItem("token");
      setLoading(false);
      message.error(error.message);
      navigate("/login");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      validateToken();
    } else {
      navigate("/login");
    }
  }, [navigate, validateToken]);
  return <div>{loading ? <div>Loading...</div> : <>{children}</>}</div>;
};

export default ProtectedRoute;
