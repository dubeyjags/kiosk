import React from 'react'
import CountdownRedirect from '../../utils/countdownRedirect'

function ActionMsgComponent({icon="icn-clockedOut", action="Clocked Out", name}) {
  return (
    <div className="center ">
        <span className={icon}></span>
        <h1 className="font52 spaceT30">You are {action}, {name}!</h1>
        <CountdownRedirect />
      </div>
  )
}

export default ActionMsgComponent