// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import AdminHeader from './AdminHeader';

// export default function ATheatres() {
//     const [theatrelist, setTheatrelist] = useState([]);
//     const [showAddTheatreForm, setShowAddTheatreForm] = useState(false);
//     const [cVal,setCVal] = useState(1);
//     const [newTheatreData, setNewTheatreData] = useState({
//         title: ''
//         // Add more fields as needed
//     });

//     useEffect(() => {
//         fetch("http://localhost:8086/theatres", {
//             method: 'GET',
//             headers: {
//                 "Content-Type": "application/json",
//                 //  "Authorization":"Bearer "+orderacess.loggedUser.token
//             }
//         })
//         .then((response) => response.json())
//         .then((data) => {
//             console.log(data);
//             setTheatrelist(data);
//         });
//     }, [cVal]);

//     const handleAddTheatreClick = () => {
//         setShowAddTheatreForm(true);
//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setNewTheatreData({
//             ...newTheatreData,
//             [name]: value
//         });
//     };

//     const handleAddTheatreSubmit = () => {
//         fetch("http://localhost:8086/theatres", {
//             method: 'POST',
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(newTheatreData)
//         })
//         .then((response) => response.json())
//         .then((data) => {
//             console.log("Theatre added successfully:", data);
//             // Optionally, you can update the movie list with the newly added movie
//             // setMovielist([...movielist, data]);
//             setShowAddTheatreForm(false);
//             setNewTheatreData({
//                 name: ''
//             });
//         })
//         .catch((error) => {
//             console.error("Error adding Theatre:", error);
//         });
//         console.log("Theatre Count before adding",moviecount);
//         setCVal(cVal+1);
//         console.log("Theatre Count after adding movie",moviecount);
//     };

//     return (
//         <div>
//             <AdminHeader />
//             <div className="container-fluid p-4">
//                 <h1 className='h3'>All Theatres</h1>
//                 <button className="btn btn-primary mb-3" onClick={handleAddTheatreClick}>Add New Theatre</button>
//                 {showAddTheatreForm && (
//                     <div>
//                         <div className="mb-3">
//                             <label htmlFor="title" className="form-label">Theatre Name:</label>
//                             <input type="text" className="form-control" id="title" name="name" value={newTheatreData.name} onChange={handleInputChange} />
//                         </div>
//                         {/* Add more input fields for other movie data */}
//                         <button className="btn btn-primary" onClick={handleAddTheatreSubmit}>Add Theatre</button>
//                     </div>
//                 )}
//                 <table className="table">
//                     <thead>
//                         <tr>
//                             <th>ID</th>
//                             <th>Theatre Name</th>
//                             {/* <th>Image</th>
//                             <th>Genre</th> */}
//                             <th>Details</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {theatrelist.map((theatre, index) => (
//                             <tr key={index}>
//                                 <td>{theatre.id}</td>
//                                 <td>{theatre.name}</td>
//                                 <td>
//                                   <Link to={`/movies/${theatre.id}`} 
//                                   className="btn btn-primary">Details
//                                   </Link>
//                                   </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }






// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import AdminHeader from './AdminHeader';

// export default function ATheatres() {
//     const [theatrelist, setTheatrelist] = useState([]);
//     const [showAddTheatreForm, setShowAddTheatreForm] = useState(false);
//     const [showAddShowForm, setShowAddShowForm] = useState(false);
//     const [newTheatreData, setNewTheatreData] = useState({
//         name: ''
//         // Add more fields as needed
//     });
//     const [newShowData, setNewShowData] = useState({
//         timing: ''
//     });

//     useEffect(() => {
//         fetch("http://localhost:8086/theatres", {
//             method: 'GET',
//             headers: {
//                 "Content-Type": "application/json",
//                 //  "Authorization":"Bearer "+orderacess.loggedUser.token
//             }
//         })
//         .then((response) => response.json())
//         .then((data) => {
//             console.log(data);
//             setTheatrelist(data);
//         });
//     }, []);

//     const handleAddTheatreClick = () => {
//         setShowAddTheatreForm(true);
//     };

//     const handleAddShowClick = () => {
//         setShowAddShowForm(true);
//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setNewTheatreData({
//             ...newTheatreData,
//             [name]: value
//         });
//     };

//     const handleShowInputChange = (e) => {
//         const { name, value } = e.target;
//         setNewShowData({
//             ...newShowData,
//             [name]: value
//         });
//     };

//     const handleAddTheatreSubmit = () => {
//         fetch("http://localhost:8086/theatres", {
//             method: 'POST',
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(newTheatreData)
//         })
//         .then((response) => response.json())
//         .then((data) => {
//             console.log("Theatre added successfully:", data);
//             setShowAddTheatreForm(false);
//             setNewTheatreData({
//                 name: ''
//             });
//         })
//         .catch((error) => {
//             console.error("Error adding Theatre:", error);
//         });
//     };

//     const handleAddShowSubmit = (theatreId) => {
//         fetch(`http://localhost:8086/theatres/${theatreId}/shows`, {
//             method: 'POST',
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(newShowData)
//         })
//         .then((response) => response.json())
//         .then((data) => {
//             console.log("Show added successfully:", data);
//             setShowAddShowForm(false);
//             setNewShowData({
//                 timing: ''
//             });
//         })
//         .catch((error) => {
//             console.error("Error adding Show:", error);
//         });
//     };

//     return (
//         <div>
//             <AdminHeader />
//             <div className="container-fluid p-4">
//                 <h1 className='h3'>All Theatres</h1>
//                 <button className="btn btn-primary mb-3" onClick={handleAddTheatreClick}>Add New Theatre</button>
//                 {showAddTheatreForm && (
//                     <div>
//                         <div className="mb-3">
//                             <label htmlFor="title" className="form-label">Theatre Name:</label>
//                             <input type="text" className="form-control" id="title" name="name" value={newTheatreData.name} onChange={handleInputChange} />
//                         </div>
//                         <button className="btn btn-primary" onClick={handleAddTheatreSubmit}>Add Theatre</button>
//                     </div>
//                 )}
//                 <table className="table">
//                     <thead>
//                         <tr>
//                             <th>ID</th>
//                             <th>Theatre Name</th>
//                             <th>Actions</th>
//                             <th>Shows</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {theatrelist.map((theatre, index) => (
//                             <tr key={index}>
//                                 <td>{theatre.id}</td>
//                                 <td>{theatre.name}</td>
//                                 <td>
//                                   <Link to={`/movies/${theatre.id}`} className="btn btn-primary">Details</Link>
//                                 </td>
//                                 <td>
//                                 <button className="btn btn-primary" onClick={() => handleAddShowClick(theatre.id)}>Add Shows</button>
                                  
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
              
//                 {showAddShowForm && (
//                     <div>
//                         <div className="mb-3">
//                             <label htmlFor="timing" className="form-label">Show Timing:</label>
//                             <input type="text" className="form-control" id="timing" name="timing" value={newShowData.timing} onChange={handleShowInputChange} />
//                         </div>
//                         <button className="btn btn-primary" onClick={() => handleAddShowSubmit(theatre.id)}>Add Show</button>
//                     </div>
//                 )}
//             </div>
//         </div>
    // );
// }



// to add show with on theatre td itself

// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import AdminHeader from './AdminHeader';

// export default function ATheatres() {
//     const [theatrelist, setTheatrelist] = useState([]);
//     const [showslist,setShowsList] = useState([]);
//     const [showAddShowFormFor, setShowAddShowFormFor] = useState(null); // Track theater ID for which show form is displayed
//     const [newShowData, setNewShowData] = useState({
//         timing: ''
//     });

//     useEffect(() => {
//         fetch("http://localhost:8086/theatres", {
//             method: 'GET',
//             headers: {
//                 "Content-Type": "application/json",
//                 //  "Authorization":"Bearer "+orderacess.loggedUser.token
//             }
//         })
//         .then((response) => response.json())
//         .then((data) => {
//             console.log(data);
//             setTheatrelist(data);
//         });
//     }, []);

//     const handleAddShowClick = (theatreId) => {
//         fetch(`http://localhost:8086/theatres/${theatreId}`, {
//             method: 'GET',
//             headers: {
//                 "Content-Type": "application/json",
//                 //  "Authorization":"Bearer "+orderacess.loggedUser.token
//             }
//         })
//         .then((response) => response.json())
//         .then((data) => {
//             console.log(data);
//             setShowsList(data);
//         });
//         setShowAddShowFormFor(theatreId); // Set theater ID for which show form is displayed
//     };

//     const handleShowInputChange = (e) => {
//         const { name, value } = e.target;
//         setNewShowData({
//             ...newShowData,
//             [name]: value
//         });
//     };

//     const handleAddShowSubmit = (theatreId) => {
//         fetch(`http://localhost:8086/shows/${theatreId}`, {
//             method: 'POST',
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(newShowData)
//         })
//         .then((response) => response.json())
//         .then((data) => {
//             console.log("Show added successfully:", data);
//             setShowAddShowFormFor(null); // Reset theater ID to hide show form
//             setNewShowData({
//                 timing: ''
//             });
//         })
//         .catch((error) => {
//             console.error("Error adding Show:", error);
//         });
//     };

//     return (
//         <div>
//             <AdminHeader />
//             <div className="container-fluid p-4">
//                 <h1 className='h3'>All Theatres</h1>
//                 <table className="table">
//                     <thead>
//                         <tr>
//                             <th>ID</th>
//                             <th>Theatre Name</th>
//                             <th>Actions</th>
//                             <th>Shows</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {theatrelist.map((theatre, index) => (
//                             <tr key={index}>
//                                 <td>{theatre.id}</td>
//                                 <td>{theatre.name}</td>
//                                 <td>
//                                 <Link to={`/movies/${theatre.id}`} className="btn btn-primary">Details</Link>
//                                 </td>
//                                 <td>
//                                   {showAddShowFormFor === theatre.id ? (
//                                     <div>
//                                       <div className="mb-3">
//                                         <label htmlFor="timing" className="form-label">Show Timing:</label>
//                                         <input type="text" className="form-control" id="timing" name="timing" value={newShowData.timing} onChange={handleShowInputChange} />
//                                       </div>
//                                       <button className="btn btn-primary" onClick={() => handleAddShowSubmit(theatre.id)}>Add Show</button>
//                                     </div>
//                                   ) : (
//                                     <button className="btn btn-primary" onClick={() => handleAddShowClick(theatre.id)}>View Shows</button>
//                                   )}
                                  
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }


// to display all shows of theatre and add show button
// Before adding movie field for theatre




// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import AdminHeader from './AdminHeader';

// export default function ATheatres() {
//     const [theatrelist, setTheatrelist] = useState([]);
//     const [showslist, setShowsList] = useState([]);
//     const [showAddTheatreForm, setShowAddTheatreForm] = useState(false);
//     const [showViewShowFor, setShowViewShowFor] = useState(null)
//     const [showAddShowFormFor, setShowAddShowFormFor] = useState(null); // Track theater ID for which show form is displayed
//     const [newTheatreData, setNewTheatreData] = useState({
//               name: ''
//               // Add more fields as needed
//           });
//     const [newShowData, setNewShowData] = useState({
//         timing: ''
//     });

//     useEffect(() => {
//         fetch("http://localhost:8086/theatres", {
//             method: 'GET',
//             headers: {
//                 "Content-Type": "application/json",
//             }
//         })
//         .then((response) => response.json())
//         .then((data) => {
//             console.log(data);
//             setTheatrelist(data);
//         });
//     }, []);
//     const handleAddTheatreClick = () => {
//               setShowAddTheatreForm(true);
//           };
//           const handleInputChange = (e) => {
//                     const { name, value } = e.target;
//                     setNewTheatreData({
//                         ...newTheatreData,
//                         [name]: value
//                     });
//                 };

//     const handleViewShowClick = (theatreId) => {
//         fetch(`http://localhost:8086/theatres/${theatreId}`, {
//             method: 'GET',
//             headers: {
//                 "Content-Type": "application/json",
//             }
//         })
//         .then((response) => response.json())
//         .then((data) => {
//             console.log(data);
//             setShowsList(data);
//             setShowViewShowFor(theatreId);
//              // Set theater ID for which show form is displayed
//         });
//     };

//     const handleAddShowClick = (theatreId) => {
//       setShowAddShowFormFor(theatreId);
//     }


//     const handleShowInputChange = (e) => {
//         const { name, value } = e.target;
//         setNewShowData({
//             ...newShowData,
//             [name]: value
//         });
//     };

//     const handleAddTheatreSubmit = () => {
//               fetch("http://localhost:8086/theatres", {
//                   method: 'POST',
//                   headers: {
//                       "Content-Type": "application/json",
//                   },
//                   body: JSON.stringify(newTheatreData)
//               })
//               .then((response) => response.json())
//               .then((data) => {
//                   console.log("Theatre added successfully:", data);
//                   setShowAddTheatreForm(false);
//                   setNewTheatreData({
//                       name: ''
//                   });
//               })
//               .catch((error) => {
//                   console.error("Error adding Theatre:", error);
//               });
//           };

//     const handleAddShowSubmit = (theatreId) => {
//         fetch(`http://localhost:8086/shows/${theatreId}`, {
//             method: 'POST',
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(newShowData)
//         })
//         .then((response) => response.json())
//         .then((data) => {
//             console.log("Show added successfully:", data);
//             setShowAddShowFormFor(null); // Reset theater ID to hide show form
//             setNewShowData({
//                 timing: ''
//             });
//         })
//         .catch((error) => {
//             console.error("Error adding Show:", error);
//         });
//     };

//     return (
//         <div>
//             <AdminHeader />
//             <div className="container-fluid p-4">
//                 <h1 className='h3'>All Theatres</h1>
//                 <button className="btn btn-primary mb-3" onClick={handleAddTheatreClick}>Add New Theatre</button>
//                   {showAddTheatreForm && (
//                     <div>
//                         <div className="mb-3">
//                             <label htmlFor="title" className="form-label">Theatre Name:</label>
//                             <input type="text" className="form-control" id="title" name="name" value={newTheatreData.name} onChange={handleInputChange} />
//                         </div>
//                         <button className="btn btn-primary" onClick={handleAddTheatreSubmit}>Add Theatre</button>
//                     </div>
//                 )}
//                 <table className="table">
//                     <thead>
//                         <tr>
//                             <th>ID</th>
//                             <th>Theatre Name</th>
//                             <th>Actions</th>
//                             <th>Shows</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {theatrelist.map((theatre, index) => (
//                             <tr key={index}>
//                                 <td>{theatre.id}</td>
//                                 <td>{theatre.name}</td>
//                                 <td>
//                                     <Link to={`/movies/${theatre.id}`} className="btn btn-primary">Details</Link>
//                                 </td>
//                                 <td>
                                    

//                                     {showViewShowFor === theatre.id ? (
//                                         <div>
//                                             {showslist.shows.length === 0 ? (
//                                                 <div>No shows available</div>
//                                             ) : (
//                                                 showslist.shows.map((show, idx) => (
//                                                     <div key={idx}>{show.timing}</div>
//                                                 ))
//                                             )}
//                                             <button className="btn btn-primary" onClick={() => setShowAddShowFormFor(theatre.id)}>Add New Show</button>
//                                         </div>
//                                     ) : (
//                                         <button className="btn btn-primary" onClick={() => handleViewShowClick(theatre.id)}>View Shows</button>
//                                     )}
//                                     {showAddShowFormFor === theatre.id && (
//                                         <div>
//                                             <div className="mb-3">
//                                                 <label htmlFor="timing" className="form-label">Show Timing:</label>
//                                                 <input type="text" className="form-control" id="timing" name="timing" value={newShowData.timing} onChange={handleShowInputChange} />
//                                             </div>
//                                             <button className="btn btn-primary" onClick={() => handleAddShowSubmit(theatre.id)}>Add Show</button>
//                                         </div>
//                                     )}

//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }



// After adding movie fiedl for each theatre


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminHeader from './AdminHeader';

export default function ATheatres() {
    const [theatrelist, setTheatrelist] = useState([]);
    const [showslist, setShowsList] = useState([]);
    const [moviesList, setMoviesList] = useState([]);
    const [showAddTheatreForm, setShowAddTheatreForm] = useState(false);
    const [showViewShowFor, setShowViewShowFor] = useState(null);
    const [showAddShowFormFor, setShowAddShowFormFor] = useState(null); // Track theater ID for which show form is displayed
    const [showAddMovieFormFor, setShowAddMovieFormFor] = useState(null); // Track theater ID for which movie form is displayed
    const [newTheatreData, setNewTheatreData] = useState({
        name: ''
    });
    const [newShowData, setNewShowData] = useState({
        timing: ''
    });
    // const [selectedMovie, setSelectedMovie] = useState('');
    // const [movieList, setMovieList] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8086/theatres", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setTheatrelist(data);
        });

        // Fetch movie data
        fetch("http://localhost:8086/movies", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setMoviesList(data);
        });
    }, []);

    const handleMovieChange = (event) => {
        setSelectedMovie(event.target.value);
    };

    // const handleAddMovie = (theatreId) => {
    //     // Send a POST request to add the selected movie to the theatre
    //     fetch(`http://localhost:8086/theatres/${theatreId}/movies`, {
    //         method: 'POST',
    //         headers: {
    //             "Content-Type": "application/json",
    //         }
    //     })
    //     .then((response) => response.json())
    //     .then((data) => {
    //         console.log("Movie added successfully:", data);
    //         // Update the theatre list after adding the movie
    //         setTheatrelist(prevTheatres => {
    //             return prevTheatres.map(theatre => {
    //                 if (theatre.id === theatreId) {
    //                     return {
    //                         ...theatre,
    //                         movieName: data.title // Assuming the response contains the movie title
    //                     };
    //                 }
    //                 return theatre;
    //             });
    //         });
    //     })
    //     .catch((error) => {
    //         console.error("Error adding movie:", error);
    //     });
    // };

    const handleAddMovie = (theatreId) => {
        // Send a POST request to add the selected movie to the theatre
        fetch(`http://localhost:8086/theatres/${theatreId}/movies`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ movieId: selectedMovie })
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("Movie added successfully:", data);
            // Update the theatre list after adding the movie
            setTheatrelist(prevTheatres => {
                return prevTheatres.map(theatre => {
                    if (theatre.id === theatreId) {
                        return {
                            ...theatre,
                            movieName: data.title // Assuming the response contains the movie title
                        };
                    }
                    return theatre;
                });
            });
        })
        .catch((error) => {
            console.error("Error adding movie:", error);
        });
    };
    const handleAddTheatreClick = () => {
        setShowAddTheatreForm(true);
    };

    const handleViewShowClick = (theatreId) => {
        fetch(`http://localhost:8086/theatres/${theatreId}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setShowsList(data);
            setShowViewShowFor(theatreId);
        });
    };

    // const handleAddShowClick = (theatreId) => {
        //       setShowAddShowFormFor(theatreId);
        //     }
        
        
            const handleShowInputChange = (e) => {
                const { name, value } = e.target;
                setNewShowData({
                    ...newShowData,
                    [name]: value
                });
            };

    const handleAddShowClick = (theatreId) => {
        setShowAddShowFormFor(theatreId);
    };

    const handleAddMovieClick = (theatreId) => {
        setShowAddMovieFormFor(theatreId);
    };

    const handleAddMovieSubmit = (theatreId) => {
        // Call your API to add the movie to the theatre
        fetch(`http://localhost:8086/theatres/${theatreId}/movies/${selectedMovie}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({}) // You can send additional data if needed
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("Movie added to theatre successfully:", data);
            // Reset the state and close the form
            setShowAddMovieFormFor(null);
            setSelectedMovie('');
        })
        .catch((error) => {
            console.error("Error adding movie to theatre:", error);
        });
    };

    const handleAddShowSubmit = (theatreId) => {
                fetch(`http://localhost:8086/shows/${theatreId}`, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(newShowData)
                })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Show added successfully:", data);
                    setShowAddShowFormFor(null); // Reset theater ID to hide show form
                    setNewShowData({
                        timing: ''
                    });
                })
                .catch((error) => {
                    console.error("Error adding Show:", error);
                });
            };

    return (
        <div>
            <AdminHeader />
            <div className="container-fluid p-4">
                <h1 className='h3'>All Theatres</h1>
                <button className="btn btn-primary mb-3" onClick={handleAddTheatreClick}>Add New Theatre</button>
                {showAddTheatreForm && (
                    <div>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Theatre Name:</label>
                            <input type="text" className="form-control" id="title" name="name" value={newTheatreData.name} onChange={handleInputChange} />
                        </div>
                        <button className="btn btn-primary" onClick={handleAddTheatreSubmit}>Add Theatre</button>
                    </div>
                )}
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Theatre Name</th>
                            <th>Actions</th>
                            <th>Shows</th>
                            <th>Movies</th>
                        </tr>
                    </thead>
                    <tbody>
                        {theatrelist.map((theatre, index) => (
                            <tr key={index}>
                                <td>{theatre.id}</td>
                                <td>{theatre.name}</td>
                                <td>
                                    <Link to={`/movies/${theatre.id}`} className="btn btn-primary">Details</Link>
                                </td>
                                <td>
                                    {showViewShowFor === theatre.id ? (
                                        <div>
                                            {showslist.shows.length === 0 ? (
                                                <div>No shows available</div>
                                            ) : (
                                                showslist.shows.map((show, idx) => (
                                                    <div key={idx}>{show.timing}</div>
                                                ))
                                            )}
                                            <button className="btn btn-primary" onClick={() => setShowAddShowFormFor(theatre.id)}>Add New Show</button>
                                        </div>
                                    ) : (
                                        <button className="btn btn-primary" onClick={() => handleViewShowClick(theatre.id)}>View Shows</button>
                                    )}
                                    {showAddShowFormFor === theatre.id && (
                                        <div>
                                            <div className="mb-3">
                                                <label htmlFor="timing" className="form-label">Show Timing:</label>
                                                <input type="text" className="form-control" id="timing" name="timing" value={newShowData.timing} onChange={handleShowInputChange} />
                                            </div>
                                            <button className="btn btn-primary" onClick={() => handleAddShowSubmit(theatre.id)}>Add Show</button>
                                        </div>
                                    )}
                                </td>
                                {/* <td>
                                    {moviesList.length === 0 ? (
                                        <div>No movies available</div>
                                    ) : (
                                        <div>
                                            {theatre.movieName ? (
                                                <div>{theatre.movieName}</div>
                                            ) : (
                                                <div>
                                                    <button className="btn btn-primary" onClick={() => setShowAddMovieFormFor(theatre.id)}>Add Movie</button>
                                                    {showAddMovieFormFor === theatre.id && (
                                                        <div>
                                                            <select value={selectedMovie} onChange={(e) => setSelectedMovie(e.target.value)}>
                                                                <option value="">Select a movie</option>
                                                                {moviesList.map((movie) => (
                                                                    <option key={movie.id} value={movie.id}>{movie.name}</option>
                                                                ))}
                                                            </select>
                                                            <button className="btn btn-primary" onClick={() => handleAddMovieSubmit(theatre.id)}>Add Movie</button>
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </td> */}


<td>
                                    {theatre.movieName ? (
                                        <div>{theatre.movieName}</div>
                                    ) : (
                                        <div>No movie available</div>
                                    )}
                                </td>
                                <td>
                                    {theatre.movieName ? (
                                        <button className="btn btn-secondary" disabled>Add Movie</button>
                                    ) : (
                                        <select className="form-select" onChange={handleMovieChange}>
                                            <option value="">Select Movie</option>
                                            {moviesList.map((movie) => (
                                                <option key={movie.id} value={movie.id}>{movie.title}</option>
                                            ))}
                                        </select>
                                    )}
                                    {!theatre.movieName && selectedMovie && (
                                        <button className="btn btn-primary" onClick={() => handleAddMovie(theatre.id)}>Add Movie</button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
