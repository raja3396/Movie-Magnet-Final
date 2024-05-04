import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

export default function MoviesList() {
    const [movielist, setMovielist] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:8086/movies",{
            method:'GET',
            headers:{
                "Content-Type":"application/json",
                //  "Authorization":"Bearer "+orderacess.loggedUser.token
            }
        })
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data);
            setMovielist(data);
        })
    },[])

    const [page, setPage] = useState(1); // Initial page number
    const itemsPerPage = 5; // Number of items to show per page

    // Calculate the starting and ending indices for the current page
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, movielist.length);

    const handlePrevClick = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const handleNextClick = () => {
        if (endIndex < movielist.length) {
            setPage(page + 1);
        }
    };

    return (
        <div className="container-fluid p-4">
            <h1 className='h3'>Recommended Movies</h1>
            <div className="row row-cols-1 row-cols-md-5 g-3 ">
                {movielist.slice(startIndex, endIndex).map((movie, index) => (
                    <div key={index} className="col mb-4">
                        {/* <Link to={'/login'}> */}
                        <div className="card h-100 " >
                            <img
                                src={movie.image2}
                                className="card-img-top rounded "
                                alt="Movie Poster"
                                style={{ objectFit: "cover", height: "380px" }}
                            />
                            <div className="card-body">
                                <h5 className="card-title text-start">{movie.title}</h5>
                                <p className="card-title text-start">{movie.genre}</p>
                                <Link to={`/movies/${movie.id}`} className="btn btn-primary">Details</Link>
                            </div>
                        </div>
                        {/* </Link> */}
                    </div>
                ))}
            </div>
            <div className="text-center mt-3">
                <button className="btn btn-primary me-2" onClick={handlePrevClick} disabled={page === 1}>Previous</button>
                <button className="btn btn-primary" onClick={handleNextClick} disabled={endIndex >= movielist.length}>Next</button>
            </div>
        </div>
    );
}
