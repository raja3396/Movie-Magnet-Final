// import React, { useState, useEffect } from 'react';

// function MovieSearch() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [movies, setMovies] = useState([]);
//   const [searchResults, setSearchResults] = useState([]);

//   useEffect(() => {
//     // Fetch movies from the API
//     fetch('http://localhost:8086/movies')
//       .then(response => response.json())
//       .then(data => {
//         setMovies(data);
//       })
//       .catch(error => {
//         console.error('Error fetching movies:', error);
//       });
//   }, []);

//   useEffect(() => {
//     // Filter movies based on search term
//     const results = movies.filter(movie =>
//       movie.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setSearchResults(results);
//   }, [searchTerm, movies]);

//   const handleSearchChange = event => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search by movie title"
//         value={searchTerm}
//         onChange={handleSearchChange}
//       />
//       <ul>
//         {searchResults.map(movie => (
//           <li key={movie.id}>{movie.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default MovieSearch;



// import React, { useState, useEffect } from 'react';

// function MovieSearch() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [movies, setMovies] = useState([]);
//   const [searchResults, setSearchResults] = useState([]);

//   useEffect(() => {
//     // Fetch movies from the API
//     fetch('your_api_endpoint_here')
//       .then(response => response.json())
//       .then(data => {
//         setMovies(data);
//       })
//       .catch(error => {
//         console.error('Error fetching movies:', error);
//       });
//   }, []);

//   useEffect(() => {
//     // Filter movies based on search term
//     const results = movies.filter(movie =>
//       movie.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setSearchResults(results);
//   }, [searchTerm, movies]);

//   const handleSearchChange = event => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search by movie title"
//         value={searchTerm}
//         onChange={handleSearchChange}
//       />
//       {searchTerm && (
//         <ul>
//           {searchResults.map(movie => (
//             <li key={movie.id}>{movie.title}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default MovieSearch;



// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { Navbar, Nav, Container, Form, FormControl, Button,NavDropdown } from 'react-bootstrap';

// function MovieSearch() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [movies, setMovies] = useState([]);
//   const [searchResults, setSearchResults] = useState([]);

//   useEffect(() => {
//     // Fetch movies from the API
//     fetch('http://localhost:8086/movies')
//       .then(response => response.json())
//       .then(data => {
//         setMovies(data);
//       })
//       .catch(error => {
//         console.error('Error fetching movies:', error);
//       });
//   }, []);

//   useEffect(() => {
//     // Filter movies based on search term
//     const results = movies.filter(movie =>
//       movie.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setSearchResults(results);
//   }, [searchTerm, movies]);

//   const handleSearchChange = event => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <div>
      
//       {/* <input */}
//       <Form className="d-flex flex-grow-1 justify-content-center ">
//       <FormControl
//         type="text"
//         placeholder="Search by movie title"
//         value={searchTerm}
//         onChange={handleSearchChange}
//         />
//       {/* /> */}
//       </Form>
//       {searchTerm && (
//         <ul>
//           {searchResults.map(movie => (
//             <li key={movie.id}>
//               <Link to={`/movies/${movie.id}`} className="btn btn-primary">{movie.title}</Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default MovieSearch;

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { Form, FormControl } from 'react-bootstrap';

// function MovieSearch() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [movies, setMovies] = useState([]);
//   const [searchResults, setSearchResults] = useState([]);
//   const [showResults, setShowResults] = useState(false);

//   useEffect(() => {
//     // Fetch movies from the API
//     fetch('http://localhost:8086/movies')
//       .then(response => response.json())
//       .then(data => {
//         setMovies(data);
//       })
//       .catch(error => {
//         console.error('Error fetching movies:', error);
//       });
//   }, []);

//   useEffect(() => {
//     // Filter movies based on search term
//     const results = movies.filter(movie =>
//       movie.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setSearchResults(results);
//     setShowResults(true);
//   }, [searchTerm, movies]);

//   const handleSearchChange = event => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <div className="position-relative">
//       <Form className="d-flex flex-grow-1 justify-content-center">
//         <FormControl
//           type="text"
//           placeholder="Search by movie title"
//           value={searchTerm}
//           onChange={handleSearchChange}
//         />
//       </Form>
//       {showResults && (
//         <ul className="position-absolute top-100 start-0 w-100 bg-light p-2">
//           {searchResults.map(movie => (
//             <li key={movie.id}>
//               <Link to={`/movies/${movie.id}`} className="btn btn-primary d-block">{movie.title}</Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default MovieSearch;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, FormControl } from 'react-bootstrap';

function MovieSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Fetch movies from the API
    fetch('http://localhost:8086/movies')
      .then(response => response.json())
      .then(data => {
        setMovies(data);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
      });
  }, []);

  useEffect(() => {
    // Filter movies based on search term
    const results = movies.filter(movie =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, movies]);

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <Form className="d-flex flex-grow-1 justify-content-center">
        <FormControl
          type="text"
          placeholder="Search by movie title"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </Form>
      {searchTerm && (
        <ul className=" position-absolute top-100 start-30 w-10 bg-light br-2 p-2 rounded list-unstyled">
          {searchResults.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} className="btn d-block">{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MovieSearch;



