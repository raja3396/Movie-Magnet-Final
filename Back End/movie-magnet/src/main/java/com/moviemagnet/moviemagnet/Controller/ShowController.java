package com.moviemagnet.moviemagnet.Controller;
import com.moviemagnet.moviemagnet.Entity.Show;
import com.moviemagnet.moviemagnet.Service.ShowService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@CrossOrigin
@RestController
@RequestMapping("/shows")
public class ShowController {
    @Autowired
    private ShowService showService;


    // Passing theatre Id in the request body

//    @PostMapping
//    public Show addShow(@RequestBody Show show) {
//        return showService.addShow(show);
//    }

    // passing TheatreId in the url itself
    @PostMapping ("/{theatreId}")// The endpoint now expects theatreId in the URL
    public Show addShow(@PathVariable Long theatreId, @RequestBody Show show) {
        return showService.addShow(theatreId, show);
    }
    // Other endpoints as needed

    @GetMapping("/{showId}")
    public ResponseEntity<Show> getShowById(@PathVariable Long showId) {
        Show show = showService.getShowById(showId);
        if (show != null) {
            return ResponseEntity.ok(show);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}