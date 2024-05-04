package com.moviemagnet.moviemagnet.Service;


import com.moviemagnet.moviemagnet.DAO.MovieRepository;
import com.moviemagnet.moviemagnet.DAO.TheatreRepository;
import com.moviemagnet.moviemagnet.Entity.Movie;
import com.moviemagnet.moviemagnet.Entity.Theatre;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TheatreService {
    @Autowired
    private TheatreRepository theatreRepository;

    @Autowired
    private MovieRepository movieRepository;

    public Theatre addTheatre(Theatre theatre) {
        return theatreRepository.save(theatre);
    }

    public List<Theatre> getAllTheatres()
    {
        List<Theatre> theatres = theatreRepository.findAll();
        for (Theatre theatre : theatres) {
            Movie movie = theatre.getMovie();
            if (movie != null) {
                theatre.setMovieName(movie.getTitle());
            }
        }
        return theatres;
    }
//    public Theatre getTheatreById(Long theatreId) {
//        return theatreRepository.findById(theatreId).orElse(null);
//    }
        public Theatre getTheatreById(Long theatreId) {
            Theatre theatre = theatreRepository.findById(theatreId).orElse(null);
            if (theatre != null && theatre.getMovie() != null) {
                theatre.setMovieName(theatre.getMovie().getTitle());
            }
            return theatre;
        }

    public Theatre addMovieToTheatre(Long theatreId, Long movieId) {
        Theatre theatre = theatreRepository.findById(theatreId).orElseThrow(() -> new RuntimeException("Theatre not found"));
        Movie movie = movieRepository.findById(movieId).orElseThrow(() -> new RuntimeException("Movie not found"));

        theatre.setMovie(movie);
        return theatreRepository.save(theatre);
    }
}