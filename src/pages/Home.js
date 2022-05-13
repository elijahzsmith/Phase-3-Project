import React from "react";
//import ReactDOM from "react-dom";
function Home() {
  return (
    <div>
      <div className='homeBox' >
        <div className='homeBoxLeft'>
          <div className='homeBoxLeftPt1'>HOURS
          <div className='homeHours1'>
            TUESDAY - SATURDAY
          </div>
          <div className='homeHours2'> 12pm - midnight
          </div>
          </div>
          <div className='homeBoxLeftPt2'>LOCATION
          <div className='homeAddress1'>
            123 Flatiron Street
          </div>
          <div className='homeAddress2'>
            Always Sunshine, USA
          </div>
          </div>
        </div>
        <div className='homeBoxRight' />
      </div>
    </div>
  );
}
export default Home;