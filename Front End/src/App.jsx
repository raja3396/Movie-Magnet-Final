import './App.css'
import SeatsFinal from './Components/SeatsFinal'
import Book from './Components/Book'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import QRCodeGenerator from './Components/QRCodeGenerator'
import Login from './Components/Login';
// import NavbarComponent from './Components/NavbarComponent';
import MyProfile from './Components/MyProfile';
import Components from './Components/Components';
import MyTickets from './Components/MyTickets';
// import SingleMovie from './Components/SingleMovie';
import MovieTrailers from './Components/MovieTrailers';
import Movie from './Components/Movie';
import DateFormat from './Components/DateFormat';
import Theaters from './Components/Theaters';
import Seatings from './Components/Seatings';
import Locations from './Components/Locations';
// import Location from './Components/Location';
import Admin from './Components/Admin'
import AMovies from './Components/AMovies'
import ATheatres from './Components/ATheatres'
import MovieSearch from './Components/MovieSearch'
import {UserContext} from './contexts/UserContext'
import { useState } from 'react'
import Register from './Components/Register'
import HomePage from './Components/HomePage'
import Profile from './Components/Profile'
import Ordersget from './Components/Ordersget'



function App() {
  const [loggedUser,setLoggedUser] 
  = useState(JSON.parse(localStorage.getItem("user")));

  return (
    <>
      <UserContext.Provider value={{loggedUser,setLoggedUser}}>
      <BrowserRouter>
      <Routes>
      <Route path='/seats/:movieId/:theatreId/:showId' element={<SeatsFinal/>}/>
      <Route path='/book' element={<Book/>}/>
      <Route path='/qrcode' element={<QRCodeGenerator/>}/>
      <Route path='/location' element={<Location/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/admin' element={<Admin/>}/>      
      <Route path='/' element={<Components/>}/>
      {/* <Route path='/profile' element={<MyProfile/>}/> */}
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/tickets' element={<Ordersget/>}/>
      <Route path='/movies/:movieId' element={<Movie/>}/>
      <Route path='/movieTrailer/:movieId' element={<MovieTrailers/>}/>
      <Route path='/theaters/:movieId/:currentDate' element={<Theaters/>}/>
      <Route path='/seatings/:currentDate' element={<Seatings/>}/>
      <Route path='/location/:movieName' element={<Locations/>}/>
      <Route path='/amovies' element={<AMovies/>}/>
      <Route path='/atheatres' element={<ATheatres/>}/>
      <Route path='/search' element={<MovieSearch/>}/>
      {/* <Route path='/locations/:cityId/:cityName' element={<HomePage/>}/> */}

      </Routes>
      
      
      </BrowserRouter>
      </UserContext.Provider>

    </>
  )
}

export default App
