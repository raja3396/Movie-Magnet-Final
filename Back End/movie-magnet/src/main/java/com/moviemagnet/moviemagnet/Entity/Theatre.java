package com.moviemagnet.moviemagnet.Entity;//package com.movie.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.List;

@Entity
public class Theatre {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;

    @ManyToOne
    @JsonIgnore
    private Movie movie;

    @Transient
    private String movieName;

    @OneToMany(mappedBy = "theatre")
    private List<Show> shows;

    public Theatre() {
        super();
    }

    public Theatre(long id, String name, Movie movie, List<Show> shows, String movieName) {
        this.id = id;
        this.name = name;
        this.movie = movie;
        this.shows = shows;
        this.movieName = movieName;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Movie getMovie() {
        return movie;
    }

    public void setMovie(Movie movie) {
        this.movie = movie;
    }

    public List<Show> getShows() {
        return shows;
    }

    public void setShows(List<Show> shows) {
        this.shows = shows;
    }

    public String getMovieName() {
        return movieName;
    }

    public void setMovieName(String movieName) {
        this.movieName = movieName;
    }
}
