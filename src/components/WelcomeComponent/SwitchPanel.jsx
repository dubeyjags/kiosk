import { useState } from "react";

function SwitchPanel(props) {
  
  const [currentPanel, setCurrentPanel] = useState('shiftList');

  const onSwitchPanel = (next) => {
    setCurrentPanel(next);
  };
  return ( <div className="overlay">
    <div id="switchPanel" className="active">
            <span className="close" onClick={props.onClose}>x</span>
            <div id="shiftList" style={{ display: currentPanel === 'shiftList' ? 'block' : 'none' }}>
              <div className="heading">
                Select Shift
              </div>
              <ul>
                <li onClick={() => onSwitchPanel('projectList')}>09:00 AM - 01:00 PM</li>
                <li onClick={() => onSwitchPanel('projectList')}>02:00 PM - 05:00 PM</li>
                <li onClick={() => onSwitchPanel('projectList')}>Unscheduled</li>
              </ul>
            </div>
            <div id="projectList" style={{ display: currentPanel === 'projectList' ? 'block' : 'none' }}>
              <div className="heading">
                <i className="icn-back-arrow offsetR10"  onClick={() => onSwitchPanel('shiftList')}></i> Select Project/Job
              </div>
              <ul>
                <li className="hasList" onClick={() => onSwitchPanel('jobList')}>P001 - Project 1</li>
                <li onClick={() => onSwitchPanel('jobList')}>J002 - Job 2</li>
                <li onClick={() => onSwitchPanel('jobList')}>J003 - Job 3</li>
              </ul>
            </div>
          <div id="jobList" style={{ display: currentPanel === 'jobList' ? 'block' : 'none' }}>
            <div className="heading">
              <i className="icn-back-arrow offsetR10"   onClick={() => onSwitchPanel('projectList')}></i> Select Job
              <span>P001 - Project 1</span>
            </div>
            <ul>
              <li onClick={props.onClose}>J001 - Job 11</li>
              <li onClick={props.onClose}>J002 - Job 2</li>
              <li onClick={props.onClose}>J003 - Job 3</li>
            </ul>
          </div>
        </div>
  </div> );
}

export default SwitchPanel;