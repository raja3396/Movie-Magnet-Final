package com.moviemagnet.moviemagnet.DAO;

import com.moviemagnet.moviemagnet.Entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

public interface BookingRepository extends JpaRepository<Booking,Long> {

        List<Booking> findByMovieIdAndTheatreIdAndShowId(Long movieId, Long theatreId, Long showId);

        List<Booking> findAllByMovieIdAndTheatreIdAndShowIdAndBookingDate(Long movieId, Long theatreId, Long showId, LocalDate bookingDate);

        @Query("SELECT b.seatNumber FROM Booking b WHERE b.movie.id = :movieId AND b.theatre.id = :theatreId AND b.show.id = :showId AND b.bookingDate = :date")
        List<Integer> findSeatNumbersByMovieIdAndTheatreIdAndShowIdAndBookingDate(@Param("movieId") Long movieId, @Param("theatreId") Long theatreId, @Param("showId") Long showId, @Param("date") LocalDate date);


//                List<Booking> findSeatNumbersByMovieIdAndTheatreIdAndShowIdAndBookingDate(Long movieId, Long theatreId, Long showId, LocalDate bookingDate);
}
