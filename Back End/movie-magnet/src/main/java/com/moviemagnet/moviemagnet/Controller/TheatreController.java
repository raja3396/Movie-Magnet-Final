package com.moviemagnet.moviemagnet.Controller;

import com.moviemagnet.moviemagnet.Entity.Movie;
import com.moviemagnet.moviemagnet.Entity.Theatre;
import com.moviemagnet.moviemagnet.Service.TheatreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
@CrossOrigin
@RestController
@RequestMapping("/theatres")
public class TheatreController {
    @Autowired
    private TheatreService theatreService;

    @PostMapping
    public Theatre addTheatre(@RequestBody Theatre theatre) {
        return theatreService.addTheatre(theatre);
    }
    // Other endpoints as needed


    @GetMapping
    public ResponseEntity<List<Theatre>> getAllTheatres() {
        List<Theatre> theatres = theatreService.getAllTheatres();
        return ResponseEntity.ok(theatres);
    }
    @GetMapping("/{theatreId}")
    public ResponseEntity<Theatre> getTheatreById(@PathVariable Long theatreId) {
        Theatre theatre = theatreService.getTheatreById(theatreId);
        if (theatre != null) {
            return ResponseEntity.ok(theatre);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

//    To add a movie to a theatre we need to pass theatre Id in url and movie Id in request body
    @PostMapping("/{theatreId}/movies")
    public Theatre addMovieToTheatre(@PathVariable Long theatreId, @RequestBody Map<String, Long> requestBody) {
        Long movieId = requestBody.get("movieId");
        return theatreService.addMovieToTheatre(theatreId, movieId);
    }
}