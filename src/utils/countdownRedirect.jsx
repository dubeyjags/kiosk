import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CountdownRedirect = ({ targetPage="/search" }) => {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      navigate(targetPage);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [navigate, targetPage]);

  return (
    <><p className="text-light">Automatically Logging you out in {countdown} seconds</p></>
  );
};

export default CountdownRedirect;
