import React, { useState } from 'react'
import {ActionMsgComponent} from './../index';

function BreakInComponent({name , onSwitchBtn}) {
  const [endBreak, setEndbreak] = useState(false);
  const [clockedOut, setClockedOut] = useState(false);
  const btnSwitch = () => onSwitchBtn();
  const btnBreakOut = () => {
    setEndbreak(true)
  }
  const btnClockOut = () =>{
    setClockedOut(true)
  }

  if(endBreak){
    return <ActionMsgComponent name={name} action="Clocked In" icon="icn-clockedIn" />
  } else if(clockedOut){
    return <ActionMsgComponent name={name} action="Clocked Out" icon="icn-clockedOut" />
  } else {
    return <div className="center">
        <h1 className="spaceB50">You are on a break, {name}</h1>
      <div className=" spaceB30 timing">
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
      <div className="spaceB20"><button className="btn btn-secondary width400" onClick={btnBreakOut}>End Break and Clock In</button></div>
      <div className="spaceB40"> <button className="btn btn-default width400" onClick={btnClockOut}>Clock Out</button></div>
      <p className="font14 d-flex justify-content-center"><i className="icn-break-cup offsetR10"></i> On Break: 000 Lunch Break (Paid) <i className="icn-change offsetL10" onClick={btnSwitch}></i></p>
      </div>
  }
}

export default BreakInComponent