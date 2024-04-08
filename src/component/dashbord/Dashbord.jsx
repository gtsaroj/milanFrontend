import React, { useState, useEffect } from "react";
import { getUserData } from "../../utils/UserAPIS/UserAPIS";

function Dashbord() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = localStorage.getItem("userId");
        console.log(userId);
        const data = await fetchUserData(userId);
        console.log(data.data);
        setUserData(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const fetchUserData = async (userId) => {
    const data = await getUserData(userId);
    return data;
  };

  return (
    <div>
      <div className="border w-[100vw] h-[100vh]">
        {userData && (
          <div>
            {userData.map((user, index) => (
              <div key={index} className="border w-[300px] h-[500px]">
                <img
                  src={user.imageone}
                  alt="Image One"
                  className="w[200px] h-[200px]"
                />
                <p>Name: {user.name}</p>
                <p>Age: {user.age}</p>
                <p>Address: {user.address}</p>
                <p>Height: {user.height}</p>
                <p>Gender: {user.sex}</p>
                <p>Holiya :{user.holiya}</p>
                <p>Missing Date: {user.date}</p>
                <p>Missing Time:{user.time}</p>
                <p>Missing Place:{user.place}</p>
                <p>Other Details: {user.others}</p>
                <p>Price amount:{user.prize}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashbord;
