package com.moviemagnet.moviemagnet.Service;

import com.moviemagnet.moviemagnet.DAO.BookingRepository;
import com.moviemagnet.moviemagnet.Entity.Booking;
import com.moviemagnet.moviemagnet.Entity.Movie;
import com.moviemagnet.moviemagnet.Entity.Show;
import com.moviemagnet.moviemagnet.Entity.Theatre;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
//import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;
import java.time.LocalDate;
import java.sql.Date;

@Service
public class BookingService {
    @Autowired
    private BookingRepository bookingRepository;

//    public Booking bookTicket(Booking booking) {
//        // Logic for booking ticket
//        return bookingRepository.save(booking);
//    }

    @Transactional
    public List<Booking> bookSeats(Long movieId, Long theatreId, Long showId, List<Integer> seatNumbers) {
        List<Booking> bookings = new ArrayList<>();
        // Retrieve the Movie, Theatre, and Show objects from the database
        Movie movie = new Movie();
        movie.setId(movieId); // Set the movieId if you don't have the movie object
        Theatre theatre = new Theatre();
        theatre.setId(theatreId); // Set the theatreId if you don't have the theatre object
        Show show = new Show();
        show.setId(showId); // Set the showId if you don't have the show object


        for (Integer seatNumber : seatNumbers) {
            Booking booking = new Booking();
            // Set the movie, theatre, and show objects
            booking.setMovie(movie);
            booking.setTheatre(theatre);
            booking.setShow(show);
            booking.setSeatNumber(seatNumber);

            // Add booking to the list
            bookings.add(booking);
        }
        // Save all bookings to the database
        return bookingRepository.saveAll(bookings);
    }
//

//    @Transactional
//    public List<Booking> bookSeats(Long movieId, Long theatreId, Long showId, List<Integer> seatNumbers, Date bookingDate) {
//        List<Booking> bookings = new ArrayList<>();
//        // Retrieve the Movie, Theatre, and Show objects from the database
//        Movie movie = new Movie();
//        movie.setId(movieId); // Set the movieId if you don't have the movie object
//        Theatre theatre = new Theatre();
//        theatre.setId(theatreId); // Set the theatreId if you don't have the theatre object
//        Show show = new Show();
//        show.setId(showId); // Set the showId if you don't have the show object
//
//        for (Integer seatNumber : seatNumbers) {
//            Booking booking = new Booking();
//            // Set the movie, theatre, show, and booking date objects
//            booking.setMovie(movie);
//            booking.setTheatre(theatre);
//            booking.setShow(show);
//            booking.setBookingDate(bookingDate); // Set the booking date
//            booking.setSeatNumber(seatNumber);
//            // Add booking to the list
//            bookings.add(booking);
//        }
//        // Save all bookings to the database
//        return bookingRepository.saveAll(bookings);
//    }




//    @Transactional
//    public List<Booking> bookSeats(Long movieId, Long theatreId, Long showId, List<Integer> seatNumbers, LocalDate bookingDate) {
//        List<Booking> bookings = new ArrayList<>();
//        // Retrieve the Movie, Theatre, and Show objects from the database
//        Movie movie = new Movie();
//        movie.setId(movieId); // Set the movieId if you don't have the movie object
//        Theatre theatre = new Theatre();
//        theatre.setId(theatreId); // Set the theatreId if you don't have the theatre object
//        Show show = new Show();
//        show.setId(showId); // Set the showId if you don't have the show object
//
//        for (Integer seatNumber : seatNumbers) {
//            Booking booking = new Booking();
//            // Set the movie, theatre, show, and booking date objects
//            booking.setMovie(movie);
//            booking.setTheatre(theatre);
//            booking.setShow(show);
//            booking.setBookingDate(java.sql.Date.valueOf(bookingDate)); // Convert LocalDate to java.sql.Date
//            booking.setSeatNumber(seatNumber);
//            // Add booking to the list
//            bookings.add(booking);
//        }
//        // Save all bookings to the database
//        return bookingRepository.saveAll(bookings);
//    }

    @Transactional
    public List<Booking> bookSeats(Long movieId, Long theatreId, Long showId, List<Integer> seatNumbers, LocalDate bookingDate) {
        List<Booking> bookings = new ArrayList<>();
        // Retrieve the Movie, Theatre, and Show objects from the database
        Movie movie = new Movie();
        movie.setId(movieId); // Set the movieId if you don't have the movie object
        Theatre theatre = new Theatre();
        theatre.setId(theatreId); // Set the theatreId if you don't have the theatre object
        Show show = new Show();
        show.setId(showId); // Set the showId if you don't have the show object

        for (Integer seatNumber : seatNumbers) {
            Booking booking = new Booking();
            // Set the movie, theatre, show, and booking date objects
            booking.setMovie(movie);
            booking.setTheatre(theatre);
            booking.setShow(show);
            booking.setBookingDate((bookingDate)); // Convert LocalDate to java.sql.Date
            booking.setSeatNumber(seatNumber);
            // Add booking to the list
            bookings.add(booking);
        }
        // Save all bookings to the database
        return bookingRepository.saveAll(bookings);
    }




    //To get all booking information for a particular show which return full json object
    public List<Booking> getAllBookingsByMovieTheatreAndShow(Long movieId, Long theatreId, Long showId) {
        return bookingRepository.findByMovieIdAndTheatreIdAndShowId(movieId, theatreId, showId);
    }

    //To get all booking information for a particular show on a particular date which return full json object
//    public List<Integer> getAllBookingsForMovieAtTheatreForShowOnDate(Long movieId, Long theatreId, Long showId, Date date) {
//        List<Booking> bookings =  bookingRepository.findAllByMovieIdAndTheatreIdAndShowIdAndBookingDate(movieId, theatreId, showId, date);
//        return bookings.stream()
//                .map(Booking::getSeatNumber)
//                .collect(Collectors.toList());
//    }

    public List<Integer> getSeatNumbers(Long movieId, Long theatreId, Long showId, LocalDate bookingDate) {
        return bookingRepository.findSeatNumbersByMovieIdAndTheatreIdAndShowIdAndBookingDate(movieId, theatreId, showId, bookingDate);
    }
//@Override
//public List<Integer> getSeatNumbers(Long movieId, Long theatreId, Long showId, LocalDate bookingDate) {
//    return bookingRepository.findSeatNumbersByMovieIdAndTheatreIdAndShowIdAndBookingDate(movieId, theatreId, showId, bookingDate);
//}



//    To get only seat numbers

    public List<Integer> getSeatNumbers(Long movieId, Long theatreId, Long showId) {
        List<Booking> bookings = bookingRepository.findByMovieIdAndTheatreIdAndShowId(movieId, theatreId, showId);
        return bookings.stream()
                .map(Booking::getSeatNumber)
                .collect(Collectors.toList());
    }
    // Other methods as needed
}
