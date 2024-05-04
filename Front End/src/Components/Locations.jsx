import React, { useEffect, useState } from "react";
import { Modal, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Locations() {
  const [locations, setLocations] = useState([]);
  const [showModal, setShowModal] = useState(true);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const fetchLocationsWithDelay = setTimeout(() => {
      fetch("http://localhost:8086/cities")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setLocations(data);
          localStorage.setItem("locations",JSON.stringify(data));
          
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }, 2000); // Delay of 2 seconds before fetching locations

    return () => clearTimeout(fetchLocationsWithDelay); // Cleanup function to clear timeout
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  const handleLocationClick = (locationName) => {
    onLocationChange(locationName);
    setShowModal(false);
  };

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const filteredLocations = locations.filter((locate) =>
    locate.cityName && locate.cityName.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        backdrop="static"
        keyboard={false}
        dialogClassName="modal-xl"
        style={{ marginTop: "70px", height: "500px", overflowY: "hidden" }}
      >
        <Modal.Header closeButton>
          <Modal.Title id="">Select Your Location</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="d-flex justify-content-center mb-3">
            <FormControl
              type="search"
              placeholder="Search your Location"
              className="me-2"
              aria-label="Search"
              value={searchInput}
              onChange={handleSearchInputChange}
            />
            <Button variant="outline-primary">Search</Button>
          </Form>
          <h4 className="text-center mb-3 ">Popular Cities</h4>
          <div className="d-flex flex-wrap justify-content-center">
            {filteredLocations.map((locate, index) => (
              <div key={index} className="text-center d-flex flex-column gap-3">
                <Link
                  to={`/locations/${locate.cityId}/${locate.cityName}`}
                  onClick={() => handleLocationClick(locate.cityName)}
                >
                  <img
                    className="mt-2"
                    src={locate.cityImage}
                    alt=""
                    style={{ height: "100px" }}
                  />
                </Link>
                <h4 className="mt-3 ml-3  p-3">{locate.cityName}</h4>
              </div>
            ))}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
