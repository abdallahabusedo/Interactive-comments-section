"use client";
import React from "react";
import AddComment from "./components/AddComment";
import Comments from "./components/Comments";
import axios from "axios";
import { CircularProgress } from "@mui/material";
export default function Home() {
  const [userData, setUserData] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setLoading(true);
    axios
      .request({
        method: "get",
        maxBodyLength: Infinity,
        url: "http://localhost:3000/currentUser",
      })
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);
  return !loading ? (
    <div className="flex flex-col justify-center items-center bg-lightGray">
      <Comments />
      <AddComment userData={userData} />
    </div>
  ) : (
    <div className="flex flex-col justify-center items-center h-screen bg-lightGray">
      <CircularProgress />
    </div>
  );
}
