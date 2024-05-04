package com.moviemagnet.moviemagnet.Controller;


import com.moviemagnet.moviemagnet.Entity.Booking;
import com.moviemagnet.moviemagnet.Service.BookingService;
import com.moviemagnet.moviemagnet.Service.TheatreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("/bookings")
public class BookingController {
    @Autowired
    private BookingService bookingService;

    @Autowired
    private TheatreService theatreService;

//    @PostMapping
//    public Booking bookTicket(@RequestBody Booking booking) {
//        return bookingService.bookTicket(booking);
//    }
    // Other endpoints as needed

    @PostMapping("/{movieId}/{theatreId}/{showId}")
    public ResponseEntity<List<Booking>> bookSeats(
            @PathVariable Long movieId,
            @PathVariable Long theatreId,
            @PathVariable Long showId,
            @RequestBody List<Integer> seatNumbers) {
        List<Booking> bookings = bookingService.bookSeats(movieId, theatreId, showId, seatNumbers);
        return ResponseEntity.ok(bookings);
    }

    @PostMapping("/{movieId}/{theatreId}/{showId}/with-localdate")
    public ResponseEntity<List<Booking>> bookSeats(
            @PathVariable Long movieId,
            @PathVariable Long theatreId,
            @PathVariable Long showId,
            @RequestBody Map<String, Object> requestBody) {

        List<Integer> seatNumbers = (List<Integer>) requestBody.get("seatNumbers");
        String dateString = (String) requestBody.get("date");
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        // Convert the string date to LocalDate
        LocalDate date = LocalDate.parse(dateString, DateTimeFormatter.ofPattern("yyyy-MM-dd"));

        List<Booking> bookings = bookingService.bookSeats(movieId, theatreId, showId, seatNumbers, date);
        return ResponseEntity.ok(bookings);
    }



//    Coverting date from string to date format
//    @PostMapping("/bookings/{movieId}/{theatreId}/{showId}")
//    public ResponseEntity<List<Booking>> bookSeats(
//            @PathVariable Long movieId,
//            @PathVariable Long theatreId,
//            @PathVariable Long showId,
//            @RequestParam("date") @DateTimeFormat(pattern = "yyyy-MM-dd") String dateString,
//            @RequestBody List<Integer> seatNumbers) {
//
//        // Parse the date string into a Date object
//        Date date;
//        try {
//            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
//            date = dateFormat.parse(dateString);
//        } catch (ParseException e) {
//            // Handle parsing exception
//            return ResponseEntity.badRequest().build();
//        }
//
//        // Call the service method to book seats
//        List<Booking> bookings = bookingService.bookSeats(movieId, theatreId, showId, seatNumbers, date);
//
//        // Return the response
//        return ResponseEntity.ok(bookings);
//    }

//    @PostMapping("/{movieId}/{theatreId}/{showId}")
//    public ResponseEntity<List<Booking>> bookSeats(
//            @PathVariable Long movieId,
//            @PathVariable Long theatreId,
//            @PathVariable Long showId,
//            @RequestBody BookingRequestDTO requestDTO) {
//
//        // Call the service method to book seats
//        List<Booking> bookings = bookingService.bookSeats(movieId, theatreId, showId, requestDTO.getSeatNumbers(), requestDTO.getBookingDate());
//
//        // Return the response
//        return ResponseEntity.ok(bookings);

//    }

//    To get all bookings for a movie of a theatre of a show on a particular date
//@GetMapping("/bookings/{movieId}/{theatreId}/{showId}/{date}")
//public ResponseEntity<List<Integer>> getAllBookingsForMovieAtTheatreForShowOnDate(
//        @PathVariable Long movieId,
//        @PathVariable Long theatreId,
//        @PathVariable Long showId,
//        @PathVariable @DateTimeFormat(pattern = "yyyy-MM-dd") Date date) {
//
//    List<Integer> bookings = bookingService.getAllBookingsForMovieAtTheatreForShowOnDate(movieId, theatreId, showId, date);
//
//    return ResponseEntity.ok(bookings);
//}
//@GetMapping("/bookings/{movieId}/{theatreId}/{showId}/{date}")
//public ResponseEntity<List<Integer>> getAllBookingsForMovieAtTheatreForShowOnDate(
//        @PathVariable Long movieId,
//        @PathVariable Long theatreId,
//        @PathVariable Long showId,
//        @PathVariable @DateTimeFormat(pattern = "yyyy-MM-dd") Date date) {
//
//    List<Integer> bookings = bookingService.getAllBookingsForMovieAtTheatreForShowOnDate(movieId, theatreId, showId, date);
//
//    if (bookings.isEmpty()) {
//        return ResponseEntity.notFound().build();
//    } else {
//        return ResponseEntity.ok(bookings);
//    }
//
//    }

    //To get all booking information for a particular show which return full json object

    @GetMapping("/{movieId}/{theatreId}/{showId}")
    public ResponseEntity<List<Booking>> getAllBookingsByMovieTheatreAndShow(
            @PathVariable Long movieId,
            @PathVariable Long theatreId,
            @PathVariable Long showId) {
        List<Booking> bookings = bookingService.getAllBookingsByMovieTheatreAndShow(movieId, theatreId, showId);
        return ResponseEntity.ok(bookings);
    }

//    To get only seat numbers

    @GetMapping("/{movieId}/{theatreId}/{showId}/seat-numbers")
    public ResponseEntity<List<Integer>> getSeatNumbers(
            @PathVariable Long movieId,
            @PathVariable Long theatreId,
            @PathVariable Long showId) {
        List<Integer> seatNumbers = bookingService.getSeatNumbers(movieId, theatreId, showId);
        return ResponseEntity.ok(seatNumbers);
    }


    @GetMapping("/{movieId}/{theatreId}/{showId}/with-localdate/seat-numbers")
    public ResponseEntity<List<Integer>> getSeatNumbers(
            @PathVariable Long movieId,
            @PathVariable Long theatreId,
            @PathVariable Long showId,
            @RequestParam("date") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate bookingDate) {
        List<Integer> seatNumbers = bookingService.getSeatNumbers(movieId, theatreId, showId, bookingDate);
        return ResponseEntity.ok(seatNumbers);
    }
}