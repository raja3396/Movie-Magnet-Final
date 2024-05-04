// import React, { useEffect, useState } from 'react';
// import { Modal, Form, FormControl, Button, Card } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// export default function Location({ show, onHide, onLocationChange }) {
//   const [locations, setLocations] = useState([]);
  

//   useEffect(() => {
//     fetch("http://localhost:8086/cities")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setLocations(data);
//       })
//       .catch((error) => {
//         // console.error("Error fetching data:", error);
//         console.log(error);
//       });
//   }, []);
  

//   return (
//     <Modal show={show} onHide={onHide} backdrop="static" keyboard={false} dialogClassName="modal-xl " style={{ marginTop: "70px", height: "400px",overflowY:"hidden" }}>
//       <Modal.Header closeButton>
//         <Modal.Title id="staticBackdropLabel">Select Your Location</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form className="d-flex justify-content-center mb-3">
//           <FormControl
//             type="search"
//             placeholder="Search your Movies"
//             className="me-2"
//             aria-label="Search"
//           />
//           <Button variant="outline-primary">Search</Button>
//         </Form>
//         <h4 className="text-center mb-3 ">Popular Cities</h4>
//         <div className="d-flex flex-wrap justify-content-center">
//           {locations.map((locate, index) => (
//             <div key={index} className="text-center d-flex flex-column gap-3 ">
//               {/* <Link to={/locations/${locate.cityId}/${locate.cityName}} onClick={() => onLocationChange(locate.cityName)}> */}
//               <Link to={`/locations/${locate.cityId}/${locate.cityName}`} onClick={() => onLocationChange(locate.cityName)}>

//                 <img className=' mt-2' src={locate.cityImage} alt="" style={{ height: "100px" }} />
//               </Link>
//               <h4 className=' mt-3 ml-3 p-2'>{locate.cityName}</h4>
//             </div>
//           ))}
//         </div>
//       </Modal.Body>
//     </Modal>
//   );
// }