import forgot from "../../images/forgot.jpg";

function ForgotPanel(props) {
  return (
    <div className="forgotPin" id="forgotPinPanel">
      <i className="close" onClick={props.onClose}></i>
      <div className="bold font18">Forgot PIN?</div>
      <p className="offsetT20">
        Request your PIN on your registered email <br />
        ({props.email}) and phone number <br />
        ({props.phone}). Use this PIN to log in to the kiosk.
      </p>
      <div className="btn btn-primary offsetT10">Request PIN</div>
      <p className="offsetT30">
        Alternatively, visit your mobile app or employee portal <br />
        to reset your PIN.
      </p>
      <div>
        <img src={forgot} alt="" />
      </div>
    </div>
  );
}

export default ForgotPanel;
