import React, { useState } from 'react'
import {ActionMsgComponent} from './../index';
import CountdownRedirect from '../../utils/countdownRedirect';

function ClockedOutComponent({name, onSwitchBtn}) {
  const [clockedIn, setClockedIn]=useState(false);
  const btnSwitch = () => onSwitchBtn();
  const btnClockedIn = () =>{
    setClockedIn(true)
  }
  if(clockedIn){
    return <ActionMsgComponent name={name} action="Clock In" icon="icn-clockedIn" />
  } else {
  return  <div className="center">
      <h1>Welcome, {name}</h1>
      <p className="spaceT50">Today's Hours</p>
      <div className="font68 spaceB30">01h 30m</div>
      <a
        className="btn btn-primary width400 spaceB40"
        onClick={btnClockedIn}
      >
        Clock In
      </a>
      <p className="spaceB10 font14 d-flex">
        <i className="icn-clock-sm offsetR10"></i> 09:00 AM - 01:00 PM
        <i className="icn-change offsetL10" onClick={btnSwitch}></i>
      </p>
      <p className="font14 d-flex spaceB30">
        <i className="icn-breifcase offsetR10"></i> J105 - Testing
      </p>
      <CountdownRedirect />
    </div> 
}
}

export default ClockedOutComponent