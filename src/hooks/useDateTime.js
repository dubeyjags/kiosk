import { useState, useEffect } from 'react';

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const useDateTime = () => {
  const [dateTime, setDateTime] = useState({
    currentdayOfWeek: '',
    currentdate: 0,
    currentmonth: '',
    currentyear: 0,
    currenthours: 0,
    currentminutes: 0,
    currentamPm: ''
  });

  useEffect(() => {
    const updateDateTime = () => {
      const date = new Date();

      const currentdayOfWeek = dayNames[date.getDay()];
      const currentdate = date.getDate();
      const currentmonth = monthNames[date.getMonth()];
      const currentyear = date.getFullYear();

      let currenthours = date.getHours();
      let currentminutes = date.getMinutes();        

      const currentamPm = currenthours >= 12 ? 'PM' : 'AM';
      currenthours = currenthours % 12 || 12; // Convert to 12-hour format and handle midnight
      currenthours = currenthours < 10 ? '0' + currenthours : currenthours;
      currentminutes = currentminutes < 10 ? '0' + currentminutes : currentminutes;
      setDateTime({
        currentdayOfWeek,
        currentdate,
        currentmonth,
        currentyear,
        currenthours,
        currentminutes,
        currentamPm
      });
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 60000); // Update every minute

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return dateTime;
};

export default useDateTime;
