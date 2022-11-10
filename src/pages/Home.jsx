import React, { useState, useEffect } from "react";
import { Col, Row, message } from "antd";
import { axiosInstance } from "../helpers/axiosInstance";
import { HideLoading, ShowLoading } from "../redux/alertsSlice";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const [buses, setBuses] = useState([]);

  const getBuses = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axiosInstance.post("/api/buses/get-all-buses", {});
      dispatch(HideLoading());
      if (response.data.success) {
        setBuses(response.data.data);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  useEffect(() => {
    getBuses();
  }, []);
  return (
    <div>
      <div>HOMEPAGE</div>
      <div>
        <Row>
          {buses.map((bus) => (
            <Col></Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Home;
