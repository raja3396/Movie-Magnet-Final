import React, { useEffect, useState } from 'react';
import NavbarComponent from "./NavbarComponent";
import Footer from "./Footer";
import { FaThumbsUp, FaPlay } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import DateFormat from './DateFormat';

export default function Movie() {
  const [singleMovie, setSingleMovie] = useState(null);
  const { movieId } = useParams();
  const currentdate=new Date();
  console.log(currentdate);

  useEffect(() => {
    fetch(`http://localhost:8086/movies/${movieId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setSingleMovie(data);
    })
    .catch((error) => {
      console.error('Error fetching movie data:', error);
    });
  }, [movieId]);

  if (!singleMovie) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <NavbarComponent />
      <div className="single-movie bg-dark text-black">
        <div className="background-image" style={{ backgroundImage: `url(${singleMovie.image1})` }}></div>
        <div className="content gap-5 d-flex">
          <div className="video m-4">
            <Link to={`/movieTrailer/${singleMovie.id}`}>
              <div className="image-container" style={{ position: "relative", width: "80%", height: "450px",marginLeft:"5%" }}>
                <img
                  src={singleMovie.image2}
                  className="w-100 h-100 rounded movieimg"
                  alt=""
                  style={{ objectFit: "cover" }}
                />
                <button type="button" className="play btn bg-black text-white position-absolute top-50 start-50 translate-middle rounded" style={{ zIndex: 2, width: "fit-content" }}>
                  <FaPlay /> Trailer
                </button>
              </div>
            </Link>
          </div>
          <div className="text-white" style={{ marginTop: "5%" }}>
            <h1>{singleMovie.title}</h1>
            <div className="border rounded text-center">
              <div className="d-flex gap-5 justify-content-between m-2">
                {/* <p style={{ fontSize: "25px", paddingLeft: "10px" }}><span style={{ color: "green" }}><FaThumbsUp /></span> {singleMovie.singleMovie.movieRating}</p> */}
                
                <button className="btn btn-primary bg-white text-black text-center">
                  I'm interested
                </button>
              </div>
              <p className="flex-column text-start m-2">Are you interested in watching this movie?</p>
            </div>
            <div className="col-2 d-flex gap-2 ">
              {/* <button className="btn btn-primary bg-white text-black mt-3">{singleMovie.singleMovie.movieView}</button> */}
              {/* <button className="btn mt-3 bg-white text-black btn-primary">{singleMovie.singleMovie.movieLanguage}</button> */}
            </div>
            {/* Additional details */}
            {/* <p className="mt-2 border rounded w-50 p-1  ">{singleMovie.singleMovie.movieDuration}</p> */}
            <Link to={`/theaters/${singleMovie.id}/${currentdate}`}><button className="btn btn-primary ">Book now</button></Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
