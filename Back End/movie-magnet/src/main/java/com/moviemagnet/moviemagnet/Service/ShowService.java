package com.moviemagnet.moviemagnet.Service;


import com.moviemagnet.moviemagnet.DAO.ShowRepository;
import com.moviemagnet.moviemagnet.DAO.TheatreRepository;
import com.moviemagnet.moviemagnet.Entity.Show;
import com.moviemagnet.moviemagnet.Entity.Theatre;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ShowService {
    @Autowired
    private ShowRepository showRepository;

    @Autowired
    private TheatreRepository theatreRepository;

// Passing theatre Id in the request body

//    public Show addShow(Show show) {
//        // Ensure that the theatre property of the show is not null
//        if (show.getTheatre() == null) {
//            throw new IllegalArgumentException("Theatre is required for a show");
//        }
//
//        // Retrieve the theatre by its ID from the database
//        Theatre theatre = theatreRepository.findById(show.getTheatre().getId())
//                .orElseThrow(() -> new RuntimeException("Theatre not found"));
//
//        // Set the retrieved theatre to the show
//        show.setTheatre(theatre);
//
//        // Save the show to the database
//        return showRepository.save(show);
//    }

// passing TheatreId in the url itself
    public Show addShow(Long theatreId, Show show) {
        // Retrieve the theatre by its ID from the database
        Theatre theatre = theatreRepository.findById(theatreId)
                .orElseThrow(() -> new RuntimeException("Theatre not found"));

        // Set the retrieved theatre to the show
        show.setTheatre(theatre);

        // Save the show to the database
        return showRepository.save(show);
    }

    public Show getShowById(Long showId) {
        return showRepository.findById(showId).orElse(null);
    }
    // Other methods as needed
}