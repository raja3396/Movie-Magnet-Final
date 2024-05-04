// import { useState, useEffect } from "react";
// import { Button, Row, Col, Modal } from "react-bootstrap";
// import NavbarComponent from "./NavbarComponent";
// import { Link, useParams } from "react-router-dom";
// import DateFormat from "./DateFormat";

// export default function Theaters() {
//   const [showModal, setShowModal] = useState(false);
//   const [selectedTheater, setSelectedTheater] = useState(null);
//   const [theaters, setTheaters] = useState([]);
//   const [title, setTitle] = useState("");
//   const [genre, setGenre] = useState("");
//   const { movieId } = useParams();

//   function handleClose() {
//     setShowModal(false);
//   }

//   function handleShow(theatre) {
//     setSelectedTheater(theatre);
//     setShowModal(true);
//   }

//   useEffect(() => {
//     fetch(`http://localhost:8086/movies/${movieId}`, {
//       method: 'GET',
//       headers: {
//         "Content-Type": "application/json",
//         //  "Authorization":"Bearer "+orderacess.loggedUser.token
//       }
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setTheaters(data.theatres); // Update state with theaters array only
//         setTitle(data.title);
//         setGenre(data.genre); 
//       })
//   }, [movieId]);

//   return (
//     <>
//       <NavbarComponent />
//       <div className="container-fluid p-3 border border-1 theaters" style={{ paddingLeft: "30px" }}>
//       <h1>{title} - Telugu</h1>
//       <p>{genre}</p>
//         <div className="container-fluid d-flex gap-3">
//           {/* {theaters.genre.map((type, index) => (
//             <Button key={index} variant="outline-success" className="btn ">
//               {type.genre}
//             </Button>
//           ))} */}
//         </div>
//       </div>
//       <DateFormat />
//       <div className="container-fluid mt-2 p-4 border">
//         {theaters.map((theater, tIndex) => (
//           <div key={tIndex}>
//             <h3>{theater.name}</h3>
//             <div className="d-flex justify-content-center gap-5">
//               {theater.shows.map((show, sIndex) => (
                
//                 // <p key={sIndex}>{show.timing}</p>
//                 <Button variant="outline-success">
//                  <Link to={`/seats/${movieId}/${show.id}`}>{show.timing}</Link> 
//                 </Button>
//               ))}
//             </div>
//             <Button variant="outline-success" onClick={() => handleShow(theater.name)}>
//               Info
//             </Button>
//             <Modal show={showModal} onHide={handleClose} backdrop="static" keyboard={false}>
//               {selectedTheater && (
//                 <>
//                   <Modal.Header closeButton>
//                     <Modal.Title>{selectedTheater}</Modal.Title>
//                   </Modal.Header>
//                   <Modal.Body>
//                     {/* Render shows here */}
//                     {theater.shows.map((show, sIndex) => (
//                       <div key={sIndex}>
//                         <p>Show ID: {show.id}</p>
//                         <p>Timing: {show.timing}</p>
//                       </div>
//                     ))}
//                   </Modal.Body>
//                   <Modal.Footer>
//                     <Button variant="secondary" onClick={handleClose}>
//                       Close
//                     </Button>
//                     <Button variant="primary" onClick={handleClose}>
//                       Understood
//                     </Button>
//                   </Modal.Footer>
//                 </>
//               )}
//             </Modal>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }




import { useState, useEffect } from "react";
import { Button, Row, Col, Modal } from "react-bootstrap";
import NavbarComponent from "./NavbarComponent";
import { Link, useParams, useNavigate } from "react-router-dom";
import DateFormat from "./DateFormat";


export default function Theaters() {
  const [showModal, setShowModal] = useState(false);
  const [selectedTheater, setSelectedTheater] = useState(null);
  const [theaters, setTheaters] = useState([]);
  const [movieTitle,setMovieTitle]= useState(""); 
  const { movieId } = useParams();
  const navigate = useNavigate();

  function handleClose() {
    setShowModal(false);
  }

  function handleShow(theatre) {
    setSelectedTheater(theatre);
    setShowModal(true);
  }

  useEffect(() => {
    localStorage.removeItem("selectedDate");
    localStorage.removeItem("Date");
    fetch(`http://localhost:8086/movies/${movieId}`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        //  "Authorization":"Bearer "+orderacess.loggedUser.token
      }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTheaters(data.theatres);
        setMovieTitle(data.title);
      })
  }, [movieId]);

  const handleShowClick = (theaterId, showId) => {
    const selectedDate = localStorage.getItem("selectedDate");
    if (selectedDate) {
      navigate(`/seats/${movieId}/${theaterId}/${showId}`);
    } else {
      alert("Please select a date");
    }
  };

  return (
    <>
      <NavbarComponent />
      <div className="container-fluid p-3 border border-1 theaters" style={{ paddingLeft: "30px" }}>
        <h1>{movieTitle}</h1>
        <div className="container-fluid d-flex gap-3"></div>
      </div>
      <DateFormat/>
      <div className="container-fluid mt-2 p-4 border">
        {theaters.map((theater, tIndex) => (
          <div key={tIndex}>
            <h3>{theater.name}</h3>
            <div className="d-flex justify-content-center gap-5">
              {theater.shows.map((show, sIndex) => (
                <Button key={sIndex} variant="outline-success" onClick={() => handleShowClick(theater.id, show.id)}>
                  {show.timing}
                </Button>
              ))}
            </div>
            <Button variant="outline-success" onClick={() => handleShow(theater.name)}>
              Info
            </Button>
          </div>
        ))}
      </div>
      <Modal show={showModal} onHide={handleClose} backdrop="static" keyboard={false}>
        {selectedTheater && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedTheater}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* Render modal content here */}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Understood
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </>
  );
}
