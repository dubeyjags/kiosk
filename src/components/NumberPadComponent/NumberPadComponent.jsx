import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';


function NumberPadComponent(props) {
  const navigate = useNavigate();
  const otpRefs = useRef([]);
  const [otpValues, setOtpValues] = useState(Array(6).fill(''));
  const numberPad =[1,2,3,4,5,6,7,8,9,0];

  const moveToNext = (currentIndex) => {
    if (currentIndex < otpRefs.current.length - 1) {
      otpRefs.current[currentIndex + 1].focus();
    }
    else {
      navigate(props.navigate);
    }
  };

  const handleInputChange = (index, value) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);
    if (value) {
      moveToNext(index);
    }
  };

  const numberPadInput = (value) => {
    for (let i = 0; i < otpRefs.current.length; i++) {
      if (otpRefs.current[i].value === '') {
        handleInputChange(i, value);
        break;
      }
    }
  };

  const backspaceInput = () => {
    for (let i = otpRefs.current.length - 1; i >= 0; i--) {
      if (otpRefs.current[i].value !== '') {
        handleInputChange(i, '');
        otpRefs.current[i].focus();
        break;
      } else if (i === 0) {
        otpRefs.current[0].focus();
      }
    }
  };
  return (
    <>

  <div>{otpValues}</div>
<div className="dots">
{otpValues.map((value, index) => (
        <i className={`dot ${value ? 'active' : ''}`} key={index}
            ref={(el) => (otpRefs.current[index] = el)}
            onChange={(e) => handleInputChange(index, e.target.value)}
            onInput={() => moveToNext(index)}
        ></i>
      ))}
      </div>
<div id="otp-container" style={{display:'none'}}>
        {otpValues.map((value, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            className={`otp-input ${value ? 'active' : ''}`}
            ref={(el) => (otpRefs.current[index] = el)}
            value={value}
            onChange={(e) => handleInputChange(index, e.target.value)}
            onInput={() => moveToNext(index)}
          />
        ))}
      </div>
    
      <div className="numberPad">
      {numberPad.map((item, index) => (
        <span className="number" key={index + '111'} onClick={() => numberPadInput(item)}>{item}</span>
        ))}
        <span className="number x" onClick={backspaceInput}>
          X
        </span>
      </div>
    </>
  );
}

export default NumberPadComponent;
