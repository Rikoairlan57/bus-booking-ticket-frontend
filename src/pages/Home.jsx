import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const { user } = useSelector((state) => state.users);
  return (
    <div>
      {user && <h1>Wolcome {user?.name}</h1>}
      {user && <h1>{user.email}</h1>}
    </div>
  );
};

export default Home;
