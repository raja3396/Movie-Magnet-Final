package com.moviemagnet.moviemagnet.DAO;

import com.moviemagnet.moviemagnet.Entity.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MovieRepository extends JpaRepository<Movie, Long> {
}
