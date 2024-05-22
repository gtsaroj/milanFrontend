import React, { useState, useEffect } from "react";
import { getUserData, deleteData } from "../../utils/UserAPIS/UserAPIS";
import ClipLoader from "react-spinners/HashLoader";
import { Link } from "react-router-dom";
import Scrolers from "../cards/IconsScrolers/Scrolers";

function Dashbord() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [refersh, setRefresh] = useState(false);

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const userId = localStorage.getItem("userId");
        if (!userId) {
          console.error("User ID not found in localStorage");
          return;
        }
        console.log("User ID:", userId);
        const response = await getUserData(userId);
        if (!response || !response.data) {
          console.error("Invalid response:", response);
          return;
        }
        console.log("Fetched data:", response.data);
        setUserData(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(true);
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
    setRefresh(false);
  }, [refersh]);

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
      setRefresh(true);

      // If deletion is successful, fetch updated data
      // const updatedUserData = await getUserData(userId);
      // setUserData(updatedUserData);
    } catch (error) {
      console.error("Error handling delete operation:", error);
      // Handle errors or display error messages to the user
    }
  };

  return (
    <div>
      <div className=" lg:w-[100vw] h-[100vh] grid sm:w-full sm:h-full ">
        <div className=" flex justify-between items-center top-0  w-[100vw] h-[70px] bg-blue-500">
          <div className="m-5 font-bold text-3xl text-white">
            <Link to="/Home">
              <h2>Dashbord</h2>
            </Link>
          </div>
          <div className="m-5">
            <h2 className="font-bold  ">
              Welcome :
              <span className="font-normal  text-white "> {username}</span>
            </h2>
            <p className="font-bold ">
              Time :{" "}
              <span className="font-normal text-white  ">
                {currentTime.toLocaleTimeString()}
              </span>
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          {!userData || loading ? (
            <div>
              <ClipLoader
                color="blue"
                size={80}
                aria-label="Loading Spinner"
                className="absolute top-1/2 left-1 items-center justify-center mt-[200px] "
              />
            </div>
          ) : (
            <div className="">
              {userData.length > 0 ? (
                userData.map((user, index) => (
                  <div key={index} className=" h-[750px] mt-5">
                    <img
                      src={user.imageone}
                      alt="Image One"
                      className=" border  w-full h-[300px]  rounded"
                    />
                    <p className="border h-[50px] text-center items-center justify-center flex bg-blue-950 text-white font-extrabold text-2xl">
                      Full Details
                    </p>
                    <div className="border  bg-red-500 text-center text-xl ">
                      <p className="text-black-500 font-bold">
                        Name: {user.name}
                      </p>
                      <p className="text-black-500 font-bold">
                        Age: {user.age}
                      </p>
                      <p className="text-black-500 font-bold">
                        Address: {user.address}
                      </p>
                      <p className="text-black-500 font-bold">
                        Height: {user.hight}
                      </p>
                      <p className="text-black-500 font-bold">
                        Gender: {user.sex}
                      </p>
                      <p className="text-black-500 font-bold">
                        Holiya: {user.holiya}
                      </p>
                      <p className="text-black-500 font-bold">
                        Missing Date: {user.date}
                      </p>
                      <p className="text-black-500 font-bold">
                        Missing Time: {user.time}
                      </p>
                      <p className="text-black-500 font-bold">
                        Missing Place: {user.place}
                      </p>
                      <p className="  text-black-500 font-bold">
                        Other Details:
                        <span>{user.others}</span>
                      </p>
                      <p className=" border h-[50px] text-center text-xl flex items-center justify-center bg-green-500 text-red-700 text-black-500 font-bold">
                        Price amount: {user.prize}Rs
                      </p>
                    </div>
                    <div className="flex justify-between  ">
                      <a
                        href="https://www.facebook.com/profile.php?id=61557895856171"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full py-2 m-1 px-4 rounded"
                      >
                        Facebook
                      </a>
                      <a
                        href="https://www.instagram.com/miilanindia/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full py-2 m-1 px-4 rounded"
                      >
                        Instagram
                      </a>
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
    </div>
  );
}

export default Dashbord;
