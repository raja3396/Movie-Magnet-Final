import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import AdminHeader from "./AdminHeader";
import CarusolComponent from "./CarusolComponent";
import Dummy from "./Dummy";
import Footer from "./Footer";
import MoviesList from "./MoviesList";
import MyProfile from "./MyProfile";
import NavbarComponent from "./NavbarComponent";

export default function Admin(){
  // const [movies, setMovies] = useState([]);
  //   const [selectedMovie, setSelectedMovie] = useState('');

  //   useEffect(() => {
  //       // Fetch data from API
  //       fetch("http://localhost:8086/movies")
  //           .then(response => response.json())
  //           .then(data => {
  //               // Assuming the data structure is an array of movie objects
  //               setMovies(data);
  //           })
  //           .catch(error => {
  //               console.error('Error fetching data:', error);
  //           });
  //   }, []);

  //   const handleMovieChange = (event) => {
  //       setSelectedMovie(event.target.value);
  //   };

  // const [movies, setMovies] = useState([]);
  //   const [selectedMovie, setSelectedMovie] = useState('');
  //   const [theatres, setTheatres] = useState([]);
  //   const [selectedTheatre, setSelectedTheatre] = useState('');

  //   useEffect(() => {
  //       // Fetch data from API
  //       fetch('http://localhost:8086/movies')
  //           .then(response => response.json())
  //           .then(data => {
  //               // Assuming the data structure is an array of movie objects
  //               console.log("movies ",data)
  //               setMovies(data);
  //           })
  //           .catch(error => {
  //               console.error('Error fetching data:', error);
  //           });
  //   }, []);

  //   useEffect(() => {
  //       if (selectedMovie) {
  //           // Fetch movie details including theaters
  //           fetch(`http://localhost:8086/movies/${selectedMovie}`)
  //               .then(response => response.json())
  //               .then(data => {
  //                   // Assuming the data structure includes movie object with theaters array
  //                   console.log("theatres",data)
  //                   setTheatres(data.theatres);
  //               })
  //               .catch(error => {
  //                   console.error('Error fetching movie details:', error);
  //               });
  //       }
  //   }, [selectedMovie]);

  //   const handleMovieChange = (event) => {
  //       setSelectedMovie(event.target.value);
  //       setSelectedTheatre('');
  //   };

  //   const handleTheatreChange = (event) => {
  //       setSelectedTheatre(event.target.value);
  //   };



    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState('');
    const [theatres, setTheatres] = useState([]);
    const [selectedTheatre, setSelectedTheatre] = useState('');
    const [shows, setShows] = useState([]);
    const [selectedShow, setSelectedShow] = useState('');
    const [seats, setSeats] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const totalSeats = 200;
    // const handleDateChange = date => {
    //     setSelectedDate(date);
    //     console.log(selectedDate);
    // };
    const handleDateChange = date => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;
        setSelectedDate(formattedDate);
        console.log(formattedDate);
        // console.log(selectedDate);
    };

    useEffect(() => {
        // Fetch data from API
        fetch('http://localhost:8086/movies')
            .then(response => response.json())
            .then(data => {
                // Assuming the data structure is an array of movie objects
                setMovies(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    useEffect(() => {
        if (selectedMovie) {
            // Fetch movie details including theaters
            fetch(`http://localhost:8086/movies/${selectedMovie}`)
                .then(response => response.json())
                .then(data => {
                    // Assuming the data structure includes movie object with theaters array
                    setTheatres(data.theatres);
                })
                .catch(error => {
                    console.error('Error fetching movie details:', error);
                });
        }
    }, [selectedMovie]);

    useEffect(() => {
        if (selectedTheatre) {
            // Fetch theater details including shows
            fetch(`http://localhost:8086/theatres/${selectedTheatre}`)
                .then(response => response.json())
                .then(data => {
                    // Assuming the data structure includes theater object with shows array
                    setShows(data.shows);
                })
                .catch(error => {
                    console.error('Error fetching theater details:', error);
                });
        }
    }, [selectedTheatre]);
//     useEffect(() => {
//       if (selectedShow) {
//           // Fetch seats based on selected movie, theatre, and show
//           fetch(`http://localhost:8086/bookings/${selectedMovie}/${selectedTheatre}/${selectedShow}/seat-numbers`)
//               .then(response => response.json())
//               .then(data => {
//                   // Assuming the data structure includes an array of seat numbers
//                   setSeats(data);
//               })
//               .catch(error => {
//                   console.error('Error fetching seats:', error);
//               });
//       }
//   }, [selectedShow]);
useEffect(() => {
    if (selectedShow && selectedDate) {
        // Fetch seats based on selected movie, theatre, show, and date
        fetch(`http://localhost:8086/bookings/${selectedMovie}/${selectedTheatre}/${selectedShow}/with-localdate/seat-numbers?date=${selectedDate}`)
            .then(response => response.json())
            .then(data => {
                // Assuming the data structure includes an array of seat numbers
                setSeats(data);
            })
            .catch(error => {
                console.error('Error fetching seats:', error);
            });
    }
}, [selectedDate]);

    const handleMovieChange = (event) => {
        setSelectedMovie(event.target.value);
        setSelectedTheatre('');
        setSelectedShow('');
    };

    const handleTheatreChange = (event) => {
        setSelectedTheatre(event.target.value);
        setSelectedShow('');
    };

    const handleShowChange = (event) => {
        setSelectedShow(event.target.value);
    };
 
    return(
      <div className="admin-container">
          <AdminHeader/>
          <h3>Movie Bookings</h3>
          
          <div className="admin-panel">
            <div className="drop-down-menu">
              <div>
                 <label htmlFor="movieSelect">Select a movie:</label>
                 <select id="movieSelect" value={selectedMovie} onChange={handleMovieChange}>
                    <option value="">Select a movie</option>
                    {movies.map(movie => (
                        <option key={movie.id} value={movie.id}>{movie.title}</option>
                    ))}
                 </select>
                </div>

                {selectedMovie && (
                    <div>
                        <label htmlFor="theatreSelect">Select a theatre:</label>
                        <select id="theatreSelect" value={selectedTheatre} onChange={handleTheatreChange}>
                            <option value="">Select a theatre</option>
                            {theatres.map(theatre => (
                                <option key={theatre.id} value={theatre.id}>{theatre.name}</option>
                            ))}
                        </select>
                    </div>
                )}

                {selectedTheatre && (
                    <div>
                        <label htmlFor="showSelect">Select a show:</label>
                        <select id="showSelect" value={selectedShow} onChange={handleShowChange}>
                            <option value="">Select a show</option>
                            {shows.map(show => (
                                <option key={show.id} value={show.id}>{show.timing}</option>
                            ))}
                        </select>
                    </div>
                )}
                  {selectedShow && (
                    <div>
                        <label htmlFor="datePicker">Select a date:</label>
                        <DatePicker
                            id="datePicker"
                            selected={selectedDate}
                            onChange={handleDateChange}
                            dateFormat="yyyy-MM-dd"
                            minDate={new Date()} // Restrict to today or future dates
                            showMonthDropdown
                            showYearDropdown
                            dropdownMode="select"
                        />
                    </div>
                )}
            </div>
    {/* without calculating seat length */}
            {/* {selectedShow && <p>Selected Show: {selectedShow}</p>} */}

            {/* {seats.length > 0 && (
                <div>
                    <h2>Seats</h2>
                    <p>Booked Seat Numbers: {seats.join(', ')}</p>
                    <p>Total Booked Seats : {seats.length}</p>
                    <p>Total Seats: {totalSeats}</p>
                    <p>Unbooked Seats: {totalSeats - seats.length}</p>
                </div>
            )} */}

              {/* without calculating seat length */}

{seats.length > 0 ? (
                <div>
                    <h2>Seats</h2>
                    <p>Booked Seat Numbers: {seats.join(', ')}</p>
                    <p>Total Booked Seats : {seats.length}</p>
                    <p>Total Seats: {totalSeats}</p>
                    <p>Unbooked Seats: {totalSeats - seats.length}</p>
                </div>
            ) : (
                <p>No seat booked for this show</p>
            )}
        </div>


      </div>
  )
  
}