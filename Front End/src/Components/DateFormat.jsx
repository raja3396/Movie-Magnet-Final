// // import { useState } from "react";
// // import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// // import { Button, Container, Row, Col } from 'react-bootstrap';
// // import { Link } from "react-router-dom";

// // export default function DateFormat() {
// //   const [currentDate, setCurrentDate] = useState(new Date());

// //   function handleNextClick() {
// //     const newDate = new Date(currentDate);
// //     newDate.setDate(newDate.getDate() + 1);
// //     setCurrentDate(newDate);
// //   }

// //   function handlePrevClick() {
// //     const newDate = new Date(currentDate);
// //     newDate.setDate(newDate.getDate() - 1);
// //     setCurrentDate(newDate);
// //   }

// //   function isFutureDate(date) {
// //     const today = new Date();
// //     return date >= today;
// //   }

// //   return (
// //     <Container fluid className="calender-container d-flex  mt-2 border p-4 gap-4">
// //       <Button variant="outline-success" className="calender-button" style={{fontSize:"30px"}} onClick={handlePrevClick}>
// //         &lt;
// //       </Button>
// //       <div variant="outline-success" className="dates-container  p-3 rounded">
// //         {
// //         isFutureDate(currentDate) ?(
// //           <Button variant="outline-success" ><Link className="link" to={`/seatings/${currentDate}`}>{currentDate.toDateString()}</Link></Button>
          
// //         ): <h4>Please select future dates only</h4>
       
// //         }
// //       </div>
// //       <Button variant="outline-success" className="calender-button" style={{fontSize:"30px"}} onClick={handleNextClick}>
// //         &gt;
// //       </Button>
// //     </Container>
// //   );
// // }


// import React, { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import { Button, Container } from 'react-bootstrap';
// import { Link } from "react-router-dom";

// export default function DateFormat() {
//   const [currentDate, setCurrentDate] = useState(new Date());

//   function handleNextClick() {
//     const newDate = new Date(currentDate);
//     newDate.setDate(newDate.getDate() + 1);
//     setCurrentDate(newDate);
//   }

//   function handlePrevClick() {
//     const newDate = new Date(currentDate);
//     newDate.setDate(newDate.getDate() - 1);
//     setCurrentDate(newDate);
//   }

//   function handleDateClick() {
//     console.log("Selected date:", currentDate.toDateString());
//     // Perform any other action you want with the selected date here
//   }

//   function isFutureDate(date) {
//     const today = new Date();
//     return date >= today;
//   }

//   return (
//     <Container fluid className="calendar-container d-flex  mt-2 border p-4 gap-4">
//       <Button variant="outline-success" className="calendar-button" style={{fontSize:"30px"}} onClick={handlePrevClick}>
//         &lt;
//       </Button>
//       <div className="dates-container  p-3 rounded">
//         {isFutureDate(currentDate) ? (
//           <Button variant="outline-success" onClick={handleDateClick}>
//             <Link className="link" to={`/seatings/${currentDate}`}>
//               {currentDate.toDateString()}
//             </Link>
//           </Button>
//         ) : (
//           <h4>Please select future dates only</h4>
//         )}
//       </div>
//       <Button variant="outline-success" className="calendar-button" style={{fontSize:"30px"}} onClick={handleNextClick}>
//         &gt;
//       </Button>
//     </Container>
//   );
// 




import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Button, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
// import "./DateFormat.css"; // Import custom CSS file

export default function DateFormat() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null); // Track the selected date

  function handleNextClick() {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + 1);
    setCurrentDate(newDate);
    setSelectedDate(null); // Reset selected date when moving to next or previous date
  }

  function handlePrevClick() {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() - 1);
    setCurrentDate(newDate);
    setSelectedDate(null); // Reset selected date when moving to next or previous date
  }

  function handleDateClick() {
    console.log("Selected date:", currentDate.toDateString());
    localStorage.setItem("Date",currentDate.toDateString());
    setSelectedDate(currentDate); // Set selected date to current date
    console.log("Selected date:", formatDate(currentDate));
    const formattedDate = formatDate(currentDate);
    localStorage.setItem("selectedDate", formattedDate);
    setCurrentDate(currentDate);
    // Perform any other action you want with the selected date here
  }

  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Add leading zero if necessary
    const day = String(date.getDate()).padStart(2, '0'); // Add leading zero if necessary
    return `${year}-${month}-${day}`;
  }

  function isFutureDate(date) {
    const today = new Date();
    return date >= today;
  }

  return (
    <Container fluid className="calendar-container d-flex mt-2 border p-4 gap-4">
      <Button variant="outline-success" className="calendar-button" style={{fontSize:"30px"}} onClick={handlePrevClick}>
        &lt;
      </Button>
      <div className="dates-container p-3 rounded">
        {isFutureDate(currentDate) ? (
          <Button className={`date-btn ${selectedDate && selectedDate.toDateString() === currentDate.toDateString() ? 'selected' : ''}`} variant="outline-success" onClick={handleDateClick}>
            {/* <Link className="link" to={`/seatings/${formatDate(currentDate)}`}> */}
              {currentDate.toDateString()}
            {/* </Link> */}
          </Button>
        ) : (
          <h4>Please select future dates only</h4>
        )}
      </div>
      <Button variant="outline-success" className="calendar-button" style={{fontSize:"30px"}} onClick={handleNextClick}>
        &gt;
      </Button>
    </Container>
  );
}
