import React, { useState } from 'react'
import {ActionMsgComponent} from './../index';

function ClockedInComponent({name , onSwitchBtn}) {
  const btnSwitch = () => onSwitchBtn();
  const [startbreak, setStartBreak]= useState(false);
  const [clockOut, setClockedOut]= useState(false);
  const btnStartBreak = () => {
    setStartBreak(true)
  }
  const btnClockOut = () =>{
    setClockedOut(true)
  }
  if(startbreak){
    return <ActionMsgComponent name={name} action="On Break" icon="icn-breakOut" />
  } else if(clockOut){
    return <ActionMsgComponent name={name} action="Clock Out" icon="icn-clockedOut" />
  } else {
  return (
    <div className="center">
    <h1 className="spaceB50">Welcome, {name}</h1>
    <p>Today's Hours</p>
    <div className=" spaceB10 timing">
      <div className="font14">
        <div className="font68">00</div>
        Hours
      </div>
      <div className="font68 secondvisible">:</div>
      <div className="font14">
        <div className="font68">00</div>
        Minutes
      </div>
    </div>
    <div className="font12 bold spaceB30">02h 00m Today</div>
    <div className="spaceB30">
      <button className="btn btn-secondary" onClick={btnStartBreak}>Start Break</button>
      <button className="btn btn-default" onClick={btnClockOut}>Clock Out</button>
    </div>
    <p className="spaceB10 font14 d-flex justify-content-center">
      <i className="icn-clock-sm offsetR10"></i> 09:00 AM - 01:00 PM
      <i className="icn-change offsetL10" onClick={btnSwitch}></i>
    </p>
    <p className="font14 d-flex justify-content-center">
      <i className="icn-breifcase offsetR10"></i> J105 - Testing
    </p>
  </div>
  )
}
}

export default ClockedInComponent