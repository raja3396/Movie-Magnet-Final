import { useEffect, useState } from "react";
import NavbarComponent from "./NavbarComponent";
import { useParams } from "react-router-dom";

export default function MovieTrailers(){
    const[movieTrailer,setMovieTrailer]=useState(null);
    const { movieId } = useParams();
    useEffect(() => {
        fetch(`http://localhost:8095/movielist/getmovie/${movieId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }
        })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setMovieTrailer(data);
        })
        .catch((error) => {
          console.error('Error fetching movie data:', error);
        });
      }, [movieId]);
    
      if (!movieTrailer) {
        return <div>Loading...</div>;
      }
    return(
        <>
        <NavbarComponent/>
        <div className="movietrailer   bg-secondary flex-column" style={{marginTop:"5%",display:"flex",alignItems:"center",justifyContent:"spacebetween"}}>
            <div className="m-5 bg-white rounded">
                <h1 className="m-2 h4 p-2 border text-start" style={{textIndent:"7px"}}>Videos for {movieTrailer.movieName}</h1>
                 <div className="m-2 border">
                    <button className="btn btn-primary rounded m-2">{movieTrailer.singleMovie.movieLanguage}</button>
                 </div>
                 <iframe width="700" height="315"className="border rounded m-2" src={movieTrailer.singleMovie.movieTrailer} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                 {/* <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item rounded" src={movieTrailer.singleMovie.movieTrailer} title="YouTube video player" allowFullScreen></iframe>
                 </div> */}
            </div>


        </div>
        </>
        
    )
}