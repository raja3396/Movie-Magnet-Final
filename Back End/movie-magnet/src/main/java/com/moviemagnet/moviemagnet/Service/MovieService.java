package com.moviemagnet.moviemagnet.Service;

import com.moviemagnet.moviemagnet.DAO.MovieRepository;
import com.moviemagnet.moviemagnet.DAO.TheatreRepository;
import com.moviemagnet.moviemagnet.Entity.Movie;
import jakarta.persistence.Id;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovieService {
    @Autowired
    private MovieRepository movieRepository;

    @Autowired
    private TheatreRepository theatreRepository;

    public Movie addMovie(Movie movie) {
        // Logic to check if theatre already has a movie
        return movieRepository.save(movie);
    }

    public List<Movie> getAllMovies()
    {
        return movieRepository.findAll();
    }
    public Movie getMovieById(Long movieId) {
        return movieRepository.findById(movieId).orElse(null);
    }
    // Other methods as needed

    public void deleteMovie(Long id) {
        Optional<Movie> optionalMovie = movieRepository.findById(id);
        if (optionalMovie.isPresent()) {
            movieRepository.delete(optionalMovie.get());
        }
    }
}
