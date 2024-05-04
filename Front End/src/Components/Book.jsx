
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NavbarComponent from "./NavbarComponent";


const Book = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // const selectedSeats = location.state.selectedSeats;
  // const selectedSeats = location.state?.selectedSeats;

  const { movieId, theatreId, showId, selectedSeats } = location.state;
  console.log(movieId);
  // const [movieData,setMovieData] = useState();


  const [totalPrice, setTotalPrice] = useState(0);
  const [movieData, setMovieData] = useState(null); // Initialize movieData as null
  const [theatreData,setTheatreData] = useState(null);
  const [showData,setShowData] = useState(null);
  const selectedDate = localStorage.getItem('selectedDate');
  const bDate = localStorage.getItem('Date');


  useEffect(() => {
    // Calculate total price when component mounts or when selectedSeats changes
    const ticketPrice = 200; // Price of each ticket
    const newTotalPrice = selectedSeats.length * ticketPrice;
    setTotalPrice(newTotalPrice);
    console.log("date is",selectedDate);
  }, [selectedSeats]);

    useEffect(()=>{
      fetch(`http://localhost:8086/movies/${movieId}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setMovieData(data);
      });
  }, []);

  useEffect(()=>{
    fetch(`http://localhost:8086/theatres/${theatreId}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setTheatreData(data);
    });
}, []);

useEffect(()=>{
  fetch(`http://localhost:8086/shows/${showId}`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    setShowData(data);
  });
}, []);


 
  // const handleBookTickets = () => {
    // Generate QR code data string
    // const qrData = `${movieName},${theatrename},${showDate},${showTime},${city},${selectedSeats.join(',')}`;
    // navigate('/qrcode', { state: { qrData,movieName,theatrename,showDate,showTime,city,imageUrl,selectedSeats,totalPrice } });
    // Alert or perform any other action with the QR code data
    // alert(`QR Code Data: ${qrData}`);
  // };
  const handleBookTickets = () => {
    // Send a POST request to book the selected seats
    
    const bookingData = {
      seatNumbers: selectedSeats.map(seat => parseInt(seat)), // Convert seat numbers to integers
      date: selectedDate // Use the selected date from localStorage
    };
  

  
    const url = `http://localhost:8086/bookings/${movieId}/${theatreId}/${showId}/with-localdate`;
  
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookingData)
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response as needed
        console.log('Booking successful:', data);
        // Redirect to a success page or perform any other action
        const qrData = `${movieName},${theatrename},${showDate},${showTime},${city},${selectedSeats.join(',')}`;
        navigate('/qrcode', { state: { qrData,movieName,theatrename,showDate,showTime,city,imageUrl,selectedSeats,totalPrice,bookingId,bDate } });
        console.log(selectedSeats);
        // console.log("booking data",bookingData)
        localStorage.removeItem("selectedDate");
        localStorage.removeItem("Date");
      })
      .catch(error => {
        // Handle errors
        console.error('Error booking tickets:', error);
      });
  };
  
  
   
  
  const imageUrl = movieData ? movieData.image2 : "";
  const movieName = movieData ? movieData.title : ""; // Check if movieData is not null before accessing its properties
  const theatrename = theatreData ? theatreData.name : "";
  const showDate = ""; // You'll need to fetch this information from the backend as it's not provided in the JSON object
  const showTime = showData ? showData.timing : "";
  const city = ""; // You'll need to fetch this information from the backend as it's not provided in the JSON object

  const currentDate = new Date();
  //   one way to get last two digits of full year like 24 in 2024
  //   const currentYear = currentDate.getFullYear()% 100; 
  //   Second way to get last two digits of full year like 24 in 2024
    const currentYear = new Date().getFullYear().toString().slice(-2);
    const currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Adding padding if the month is a single digit
    const currentDay = currentDate.getDate().toString();
  const bookingId = `${currentYear}${currentMonth}${currentDay}${movieName.slice(0, 2)}${theatrename.slice(0, 2)}${city.slice(0, 2)}${showDate.slice(0, 1)}${showTime.slice(0, 1)}${selectedSeats.slice(0, 1)}`;

  return (
    <div>
      <NavbarComponent/>
    <div className='booking-container'>
      <div className='booking-box'>
        <div className='booking-image-div'>
          <img src={imageUrl} alt="" />
        </div>
        <div className='booking-details-div'>
          <h2>Booking Summary</h2>
          <div className='booking-details'>
          <h3>{movieName}</h3>
          <h4>{theatrename}</h4>
          {/* <h4>{city}</h4> */}
          <h4>{bDate}</h4>
          <h4>{showTime} </h4>
          <p>Selected Seats: {selectedSeats.join(', ')}</p>
          <p>Total Price: {totalPrice} rupees</p>
          </div>
          <button className='book-btn' onClick={handleBookTickets}>
            Book Tickets
          </button>
        </div>
      
      </div>
    </div>
    </div>
  );
};

export default Book;
