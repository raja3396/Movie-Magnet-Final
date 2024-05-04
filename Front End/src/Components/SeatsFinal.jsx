import React, { useState, useEffect } from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import NavbarComponent from "./NavbarComponent";


const SeatsFinal = () => {
  const [blockedSeats, setBlockedSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [numTickets, setNumTickets] = useState(1); // Default number of tickets is 1
  const navigate = useNavigate();
  const {movieId,theatreId,showId,} = useParams();
  const selectedDate = localStorage.getItem("selectedDate");


  useEffect(() => {
    // Simulate fetching blocked seat numbers from API
    fetch(`http://localhost:8086/bookings/${movieId}/${theatreId}/${showId}/with-localdate/seat-numbers?date=${selectedDate}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // const blockedSeatNumbersFromAPI = data.map(seat => seat.seatNumber);
        // console.log(blockedSeatNumbersFromAPI);
        setBlockedSeats(data);
      });
  }, []);
  
  // useEffect(() => {
  //   // Simulate fetching blocked seat numbers from API
  //   fetch(`http://localhost:8086/bookings/${movieId}/${theatreId}/${showId}`)
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data);
  //       const blockedSeatNumbersFromAPI = data.map(seat => seat.seatNumber);
  //       console.log(blockedSeatNumbersFromAPI);
  //       setBlockedSeats(blockedSeatNumbersFromAPI);
  //     });
  // }, []);

  const handleSeatClick = (seatNumber) => {
    if (numTickets === '') {
      alert('Please select the number of tickets required before selecting seats.');
      return;
    }
     else if (blockedSeats.includes(seatNumber)) {
      alert(`Seat ${seatNumber} is already booked.`);
    } else {
      if (selectedSeats.includes(seatNumber)) {
        setSelectedSeats(selectedSeats.filter(seat => seat !== seatNumber));
      } else {
        if (selectedSeats.length < numTickets) {
          setSelectedSeats([...selectedSeats, seatNumber]);
        } else {
          alert(`You can only book ${numTickets} tickets.`);
        }
      }
    }
  };
  
  const renderSeats = () => {
    const seats = [];
    for (let i = 0; i < 10; i++) {
      const rowSeats = [];
      for (let j = 0; j < 20; j++) {
        const seatNumber = i * 20 + j + 1;
        const isSelected = selectedSeats.includes(seatNumber);
        const isBlocked = blockedSeats.includes(seatNumber);
        rowSeats.push(
          <div
            key={seatNumber}
            className={`seat ${isSelected ? 'selected' : ''} ${isBlocked ? 'blocked' : ''}`}
            style={{ backgroundImage: `url('https://cdn3.iconfinder.com/data/icons/sympletts-free-sampler/128/tv-seat-512.png')` }}
            onClick={() => handleSeatClick(seatNumber)}
          >
            {seatNumber}
          </div>
        );
      }
      seats.push(<div key={i} className="seat-row">{rowSeats}</div>);
    }
    return seats;
  };

  const handleBookTickets = () => {
    if (selectedSeats.length === 0) {
      alert('Please select at least one seat to book.');
    } else if (selectedSeats.length !== numTickets) {
      alert(`Select ${numTickets} tickets.`);
    }else {
      navigate('/book', {
         state: {
            movieId: movieId,
            theatreId: theatreId,
            showId: showId,
            selectedSeats: selectedSeats } });
    }
  };
  const handleNumTicketsChange = (e) => {
    const value = parseInt(e.target.value);
    if (e.target.value === '' || (!isNaN(value) && value >= 1 && value <= 10)) {
      setNumTickets(e.target.value === '' ? '' : value);
    }
  };

  return (
    <div>
      <NavbarComponent/>
    <div className='seats-container'>
    <h1>Movie Ticket Booking</h1>
    <p>How many tickets would you like to book?</p>
    <input 
      type="number" 
      value={numTickets} 
      // onChange={(e) => setNumTickets(parseInt(e.target.value))}
      onChange={handleNumTicketsChange}
      min="1"
      max="10"
    />
 
    <div className="curved-line">
    <p className='screen-name'>Screen</p>
    </div>
      
      <div className="seat-layout">
        {renderSeats()}
      </div>
      <div className='selected-seats-info'>
          <p>Selected Seats: {selectedSeats.join(', ')}</p>
          <button onClick={handleBookTickets}>Book</button>
        </div>
    </div>
  </div> 
  );
};

export default SeatsFinal;
