package com.moviemagnet.moviemagnet.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "shows")
public class Show {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String timing;
    @ManyToOne
    @JsonIgnore
    private Theatre theatre;

    public Show() {
        super();
    }

    public Show(long id, String timing, Theatre theatre) {
        this.id = id;
        this.timing = timing;
        this.theatre = theatre;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTiming() {
        return timing;
    }

    public void setTiming(String timing) {
        this.timing = timing;
    }

    public Theatre getTheatre() {
        return theatre;
    }

    public void setTheatre(Theatre theatre) {
        this.theatre = theatre;
    }
}
