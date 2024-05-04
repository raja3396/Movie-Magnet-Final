// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import AdminHeader from './AdminHeader';

// export default function AMovies() {
//     const [movielist, setMovielist] = useState([]);

//     useEffect(() => {
//         fetch("http://localhost:8086/movies", {
//             method: 'GET',
//             headers: {
//                 "Content-Type": "application/json",
//                 //  "Authorization":"Bearer "+orderacess.loggedUser.token
//             }
//         })
//         .then((response) => response.json())
//         .then((data) => {
//             console.log(data);
//             setMovielist(data);
//         });
//     }, []);

//     return (
//         <div>
//             <AdminHeader />
//             <div className="container-fluid p-4">
//                 <h1 className='h3'>Recommended Movies</h1>
//                 <table className="table">
//                     <thead>
//                         <tr>
//                             <th>ID</th>
//                             <th>Title</th>
//                             <th>Image</th>
//                             <th>Genre</th>
//                             <th>Details</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {movielist.map((movie, index) => (
//                             <tr key={index}>
//                                 <td>{movie.id}</td>
//                                 <td>{movie.title}</td>
//                                 <td><img src={movie.image2} alt="Movie Poster" style={{ width: "100px", height: "auto" }} /></td>
//                                 <td>{movie.genre}</td>
//                                 <td><Link to={`/movies/${movie.id}`} className="btn btn-primary">Details</Link></td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }





import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminHeader from './AdminHeader';

export default function AMovies() {
    const [movielist, setMovielist] = useState([]);
    const [showAddMovieForm, setShowAddMovieForm] = useState(false);
    const [moviecount,SetMovieCount] = useState(1);
    const [newMovieData, setNewMovieData] = useState({
        title: '',
        image1: '',
        image2: '',
        genre: '',
        // Add more fields as needed
    });

    useEffect(() => {
        fetch("http://localhost:8086/movies", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                //  "Authorization":"Bearer "+orderacess.loggedUser.token
            }
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setMovielist(data);
        });
    }, [moviecount]);

    const handleAddMovieClick = () => {
        setShowAddMovieForm(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewMovieData({
            ...newMovieData,
            [name]: value
        });
    };

    const handleAddMovieSubmit = () => {
        fetch("http://localhost:8086/movies", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newMovieData)
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("Movie added successfully:", data);
            // Optionally, you can update the movie list with the newly added movie
            // setMovielist([...movielist, data]);
            setShowAddMovieForm(false);
            setNewMovieData({
                title: '',
                image1: '',
                image2: '',
                genre: '',
            });
        })
        .catch((error) => {
            console.error("Error adding movie:", error);
        });
        console.log("Movie Count before adding movie",moviecount);
        SetMovieCount(moviecount+1);
        console.log("Movie Count after adding movie",moviecount);
    };

    return (
        <div>
            <AdminHeader />
            <div className="container-fluid p-4">
                <h1 className='h3'>Recommended Movies</h1>
                <button className="btn btn-primary mb-3" onClick={handleAddMovieClick}>Add New Movie</button>
                {showAddMovieForm && (
                    <div>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title:</label>
                            <input type="text" className="form-control" id="title" name="title" value={newMovieData.title} onChange={handleInputChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="image" className="form-label">Background Image URL:</label>
                            <input type="text" className="form-control" id="image" name="image1" value={newMovieData.image1} onChange={handleInputChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="image" className="form-label">Main Image URL:</label>
                            <input type="text" className="form-control" id="image" name="image2" value={newMovieData.image2} onChange={handleInputChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="genre" className="form-label">Genre:</label>
                            <input type="text" className="form-control" id="genre" name="genre" value={newMovieData.genre} onChange={handleInputChange} />
                        </div>
                        {/* Add more input fields for other movie data */}
                        <button className="btn btn-primary" onClick={handleAddMovieSubmit}>Add Movie</button>
                    </div>
                )}
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Image</th>
                            <th>Genre</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movielist.map((movie, index) => (
                            <tr key={index}>
                                <td>{movie.id}</td>
                                <td>{movie.title}</td>
                                <td><img src={movie.image2} alt="Movie Poster" style={{ width: "100px", height: "auto" }} /></td>
                                <td>{movie.genre}</td>
                                <td><Link to={`/movies/${movie.id}`} className="btn btn-primary">Details</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
