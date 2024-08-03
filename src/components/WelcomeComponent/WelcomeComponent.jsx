import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {ClockedOutComponent,ClockedInComponent,BreakInComponent,SwitchPanel} from "./../index";
import Loader from "./../../utils/loader";

function WelcomeComponent() {
  const [switchPanel, setswitchPanel] = useState(false);
  const [loader, setloader] = useState(true);
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
  const onSwitchBtn = () => {
    setswitchPanel(!switchPanel);
  };

  if(loader){
    return <Loader />
  } else if(user[id - 1].status === "CLOCKED_OUT"){
    return <><ClockedOutComponent name={user[id - 1].firstName} onSwitchBtn={onSwitchBtn} /> {switchPanel ? <SwitchPanel onClose={onSwitchBtn} /> : null}</>
  } else if(user[id - 1].status === "CLOCKED_IN"){
    return <><ClockedInComponent  name={user[id - 1].firstName} onSwitchBtn={onSwitchBtn} />{switchPanel ? <SwitchPanel onClose={onSwitchBtn} /> : null}</>
  } else if(user[id - 1].status === "ON_BREAK"){
    return <><BreakInComponent  name={user[id - 1].firstName}  onSwitchBtn={onSwitchBtn} />{switchPanel ? <SwitchPanel onClose={onSwitchBtn} /> : null}</>
  }
}

export default WelcomeComponent;
