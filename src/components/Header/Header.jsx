import { useNavigate } from "react-router-dom";
import useDateTime from "../../hooks/useDateTime";

function Header() {
  const { currentdayOfWeek,currentmonth,currentdate,currenthours,currentminutes,currentamPm} = useDateTime();
  const navigate = useNavigate();
  return ( <>
  <div className="header">
          <div className="left">{currentdayOfWeek} {currentmonth} {currentdate}</div>
          <div className="mid">{currenthours}<span className="secondvisible">:</span>{currentminutes} {currentamPm}</div>
          <div className="right">
            <button className="btn btn-default" onClick={() => navigate('/search')}>Logout</button>
          </div>
        </div>
  </> );
}

export default Header;