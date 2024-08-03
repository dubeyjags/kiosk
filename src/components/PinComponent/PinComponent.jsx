import { useEffect, useState } from "react";
import NumberPadComponent from "./../NumberPadComponent/NumberPadComponent";
import ForgotPanel from "./ForgotPanel";
import { Link, useParams } from "react-router-dom";
import Loader from "./../../utils/loader";

function PinComponent() {
  const [loader, setloader] = useState(true);
  const [forgotPanel, setForgotPanel] = useState(false);
  const [user, setUser] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch("./../data.json")
      .then((response) => response.json())
      .then((user) => {
        setUser(user);
        setloader(false);
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
      });
  }, [id]);

  const onForgotbtnToggle = () => {
    setForgotPanel(!forgotPanel);
  };

  if (loader) {
    return <Loader />
  } else {
    return (
      <>
        <Link to="/search" className="icn-back-button"></Link>
        <div className="center withTopArrow">
          <div className="pinPanel">
            <h1 className="spaceB20">Hi {user[id - 1].firstName} </h1>
            <h2 className="spaceB20">Please enter your 6 digit PIN</h2>
            <NumberPadComponent length="6" navigate={`/welcome/${id}`} />
            <Link onClick={onForgotbtnToggle}>Forgot your PIN?</Link>
          </div>
        </div>
        {forgotPanel ? <ForgotPanel email={user[id - 1].email} phone={user[id - 1].phone} onClose={onForgotbtnToggle} /> : ""}
      </>
    );
  }
}

export default PinComponent;
