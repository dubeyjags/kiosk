import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "./../../utils/loader";

function SearchComponent() {
  const [loader, setLoader] = useState(true);
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // const [deviceType, setDeviceType] = useState('laptop');
  // useEffect(() => {
  //   const userAgent = navigator.userAgent.toLowerCase();
  //   if (/tablet|ipad|playbook|silk/.test(userAgent)) {
  //     setDeviceType('tablet');
  //   } else if (
  //     /mobile|android|kindle|silk-accelerated|phone|ipod|blackberry|iemobile|mobi|opera mini|htc|phone/.test(userAgent)
  //   ) {
  //     setDeviceType('mobile');
  //   } else {
  //     setDeviceType('laptop');
  //   }
  //   document.body.classList.add(deviceType);

  // }, []);
  useEffect(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((users) => {
        setUsers(users);
        setLoader(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredUsers = users.filter(
    (item) =>
      item.fullName &&
      item.fullName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="searchSection">
      <div className="searchField">
        <i className="icn-search"></i>
        <input
          type="text"
          className="search"
          placeholder="Search Employee by Name or ID"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      {loader ? (
        <Loader />
      ) : (
        <ul>
          {filteredUsers.map((user) => (
            <li key={user.employeeCode}>
              <Link to={`/search/${user.id}`}>
                <span className="profileImg">
                  {user.profilePic ? (
                    <img src={user.profilePic} alt={user.fullName} />
                  ) : (
                    String(user.firstName).charAt(0).toUpperCase() +
                    String(user.lastName).charAt(0).toUpperCase()
                  )}
                </span>
                {user.fullName}
                <span
                  className={`status ${
                    user.status === "CLOCKED_IN"
                      ? "active"
                      : user.status === "ON_BREAK"
                      ? "break"
                      : ""
                  }`}
                >
                  {user.status}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchComponent;
