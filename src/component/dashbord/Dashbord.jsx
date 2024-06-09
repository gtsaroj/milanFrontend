import React, { useState, useEffect } from "react";
import { getUserData, deleteData } from "../../utils/UserAPIS/UserAPIS";
import ClipLoader from "react-spinners/HashLoader";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import { BadgeDollarSign, Delete, Edit, Trash } from "lucide-react";

function Dashbord() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  const [currentTime, setCurrentTime] = useState();

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCurrentTime(new Date());
  //   }, 1000);
  //   return () => clearInterval(intervalId);
  // }, []);

  const date = new Date();
  const currentTimeZone = date?.toLocaleTimeString().toString();
  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(currentTimeZone), 1000);

    return () => {
      clearInterval(interval);
    };
  }, [currentTimeZone]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const userId = localStorage.getItem("userId");
        if (!userId) {
          throw new Error("User ID not found in localStorage");
        }
        const response = await getUserData(userId);
        setUserData(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(true);
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const username = localStorage.getItem("username");

  const handleDelete = async (id) => {
    try {
      // Retrieve userId from localStorage
      // const userId = localStorage.getItem("userId");

      // if (!userId) {
      //   console.error("User ID is not found in localStorage");
      //   return;
      // }

      // Log the ID being deleted
      console.log("Deleting data with ID:", id);

      await deleteData(id);

      console.log("Data deleted successfully");

      // If deletion is successful, fetch updated data
      // const updatedUserData = await getUserData(userId);
      // setUserData(updatedUserData);
    } catch (error) {
      console.error("Error handling delete operation:", error);
      // Handle errors or display error messages to the user
    }
  };

  return (
    <React.Fragment>
      <div className=" grid">
        <div className=" flex py-3 px-2 justify-between items-center  bg-blue-500">
          <div className=" font-bold text-2xl text-white">
            <Link to="/Home">
              <h2>Dashbord</h2>
            </Link>
          </div>
          <div className="flex flex-col items-start justify-center gap-1">
            <h2 className="font-bold  ">
              Welcome :
              <span className="font-normal  text-white "> {username}</span>
            </h2>
            <p className="font-bold ">
              Time :{" "}
              <span className="font-normal text-white  ">
                {currentTime?.toString()}
              </span>
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          {loading ? (
            <div>
              <ClipLoader
                color="blue"
                size={80}
                aria-label="Loading Spinner"
                className="absolute top-1/2 left-1 items-center justify-center mt-[200px] "
              />
            </div>
          ) : (
            <div className=" flex-wrap flex w-full px-3 py-2 items-center justify-center gap-6">
              {userData?.length > 0 ? (
                userData.map((user, index) => (
                  <div
                    className=" relative group/update sm:w-fit w-full flex md:flex-row flex-col items-start  p-5 gap-5 justify-center bg-[#e4e1e1] rounded "
                    key={index}
                  >
                    <div className=" w-full sm:w-[350px]  h-[195px]">
                      <img
                        src={user.imageone}
                        className=" w-full h-full rounded "
                        alt=""
                      />
                    </div>
                    <div className="flex w-full flex-col text-gray-700 items-start gap-1">
                      <h1 className="text-sm">{user.name}</h1>
                      <h2 className="text-sm">{user.age}</h2>
                      <h3 className="text-sm">{user.height}</h3>
                      <h4 className="text-sm">
                        {" "}
                        Lost Time : {user.date} , {user.time}
                      </h4>
                      <h5 className="text-sm">Address : {user.address}</h5>
                      <h6 className="text-sm">Place : {user.place}</h6>
                      <p className="text-sm">Holiya : {user.holiya}</p>
                      <p className="text-sm">Others : {user.others}</p>
                      <p className="text-sm"> Price : {user.prize} </p>
                    </div>
                    <div className=" transition-all cursor-pointer group-hover/update:visible invisible text-white text-sm absolute left-0 right-0 rounded flex items-center justify-center gap-7 top-0 bottom-0  w-full bg-[#0000005b] ">
                      <button className="bg-red-400 hover:bg-red-500 transition-all rounded p-1">
                        <Edit className="size-5" />
                      </button>
                      <button className="bg-red-400 hover:bg-red-500 transition-all rounded p-1">
                        <Trash  className="size-5"/>{" "}
                      </button>
                      <button className="flex items-center justify-center gap-1 bg-red-400 hover:bg-red-500 transition-all rounded p-1">
                        <BadgeDollarSign className="size-5" />
                        <span>Payment</span>
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                // If there is no data, display default image
                <div className="flex justify-center items-center h-[750px] mt-5">
                  <img
                    src="/images/download.jpg" // Add your default image URL here
                    alt="Default Image"
                    className=" border h-full rounded"
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Dashbord;
