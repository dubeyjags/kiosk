import { Link, Outlet } from "react-router-dom";
import useDateTime from "../../hooks/useDateTime";

function LayoutWithLeft() {
  const { currentdayOfWeek,currentmonth,currentdate,currenthours,currentminutes,currentamPm} = useDateTime();

  return ( 
    <div className="container d-flex">
      <div className="leftPanel">
        <div className="top">
          <div className="translate"><i className="icn-translate offsetR5"></i> Switch to Spanish</div>
          <span className="icn-uzio-sm"></span>
          <div className="companyName">Spectrum</div>
          <div className="companyDetails">Kiosk: Headquarters Reception</div>
        </div>
        <div className="mid">
        <div className="text-light">{currentdayOfWeek} {currentmonth} {currentdate}</div>
        <div className="font16"><span className="font68 bold">{currenthours}<span className="secondvisible">:</span>{currentminutes}</span> {currentamPm}</div>
        </div>
        <div className="bottom">
          <div className="logoPoweredBy">Powered by <i className="icn-uzio-sm offsetL10"></i></div>
          <div className="links">
            <Link to={`#`}>Privacy Policies</Link> |
            <Link to={`#`}>Terms of Use</Link>
          </div>
        </div>
      </div>

      <div className="rightPanel">
          <Outlet />
      </div>
      </div>
  );
}

export default LayoutWithLeft;