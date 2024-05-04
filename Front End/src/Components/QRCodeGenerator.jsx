import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import { useLocation } from 'react-router-dom';
import NavbarComponent from "./NavbarComponent";


function QRCodeGenerator() {
    // Combine the input variables into a single string for QR code generation
    // const qrData = `${movieName},${theatreName},${showDate},${showTime},${city},${selectedSeats}`;
    const location = useLocation();
  const qrData = location.state.qrData;
  const movieName = location.state.movieName;
  const theatrename = location.state.theatrename;
  const city = location.state.city;
  const showDate = location.state.showDate;
  const showTime = location.state.showTime;
  const selectedSeats = location.state.selectedSeats;
  const bDate = location.state.bDate;
  const bookingId = location.state.bookingId;

//   const bookingId = `${movieName.slice(0, 2)}${theatrename.slice(0, 2)}${city.slice(0, 2)}${showDate.slice(0, 2)}${showTime.slice(0, 1)}${selectedSeats.slice(0,1)}`;
 
  // Get current year and month
  const currentDate = new Date();
//   one way to get last two digits of full year like 24 in 2024
//   const currentYear = currentDate.getFullYear()% 100; 
//   Second way to get last two digits of full year like 24 in 2024
  const currentYear = new Date().getFullYear().toString().slice(-2);
  const currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Adding padding if the month is a single digit
  const currentDay = currentDate.getDate().toString();

  // Generate booking ID
  // const bookingId = `${currentYear}${currentMonth}${currentDay}${movieName.slice(0, 2)}${theatrename.slice(0, 2)}${city.slice(0, 2)}${showDate.slice(0, 1)}${showTime.slice(0, 1)}${selectedSeats.slice(0, 1)}`;
    return (
      <div>
        <NavbarComponent/>
        <div className='ticket-container'>
            <div className='ticket-div'>
              
            <h2>Ticket</h2>
            <h5>Booking ID: {bookingId}</h5>
            <div className='qr-details'>
                <QRCode value={qrData} />
                <div className='ticket-details-div'>
                    <h1>{movieName}</h1>
                    <h2>{theatrename}</h2>
                    {/* <h3>{city}</h3> */}
                    <h3>{bDate}</h3>
                    <h3>{showTime}</h3>
                    <h3>{selectedSeats.join(', ')}</h3>
                </div>
            </div>
            </div>
        </div>
      </div> 
    );
}

export default QRCodeGenerator;
