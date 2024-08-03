import { useNavigate } from 'react-router-dom';

function Code() {
  const navigate = useNavigate();
  const submitCode = () =>{
    navigate('/search');
  }

  return ( 
    <div className="container">
      <div className="center">
        <span className="icn-uzio spaceB60"></span>
        <h1 className="font26">Link this device to your Time Kiosk</h1>
        <p>
          Go to your Uzio Employer account and enter the code below to link this
          device to your kiosk
        </p>
        <p
          className="font52 cursor-pointer bold"
          onClick={submitCode}
        >
          STTG DHHB
        </p>
        <p className="text-light">
          Stay on the screen while you confirm the activation code on your
          Employer Account.
        </p>
      </div>
    </div>
  );
}

export default Code;