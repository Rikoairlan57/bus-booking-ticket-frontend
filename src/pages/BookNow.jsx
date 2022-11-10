import React, { useState, useEffect } from "react";
import { message, Row, Col } from "antd";
import { axiosInstance } from "../helpers/axiosInstance";
import { HideLoading, ShowLoading } from "../redux/alertsSlice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const BookNow = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [bus, setBus] = useState(null);

  const getBus = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axiosInstance.post("/api/buses/get-bus-by-id", {
        _id: params.id,
      });
      dispatch(HideLoading());
      if (response.data.success) {
        setBus(response.data.data);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  useEffect(() => {
    getBus();
  }, []);
  return (
    <div>
      <Row>
        <Col lg={12} xs={24} sm={24}>
          Testing Bus
        </Col>
        <Col lg={12} xs={24} sm={24}>
          {" "}
          Testing Ticket
        </Col>
      </Row>
    </div>
  );
};

export default BookNow;
