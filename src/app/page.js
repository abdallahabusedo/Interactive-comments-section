"use client";
import React from "react";
import AddComment from "./components/AddComment";
import Comments from "./components/Comments";
import axios from "axios";
export default function Home() {
  const [userData, setUserData] = React.useState({});
  React.useEffect(() => {
    axios
      .request({
        method: "get",
        maxBodyLength: Infinity,
        url: "http://localhost:3000/currentUser",
      })
      .then((res) => setUserData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-lightGray">
      <Comments />
      <AddComment userData={userData} />
    </div>
  );
}
