import React, { useState, useEffect } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import Package from "./Package/Package";
import "./Package/Package.css";

const Packages = () => {
  const [packages, setPackages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://lit-tor-54339.herokuapp.com/packages")
      .then((res) => res.json())
      .then((data) => {
        setPackages(data);
        setIsLoading(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return (
    <div className="text-center my-5">
      {isLoading ? (
        <div className="text-center my-5">
          <Spinner animation="border" variant="dark" />
        </div>
      ) : (
        <Container className="mt-4">      
          <h3 className="text-start mb-5">All Category</h3>
          <ul className="category">
            <li className="single-li">Everyday services</li>
            <li className="single-li">Outdoor</li>
            <li className="single-li">Exterior</li>
            <li className="single-li">Interior</li>
            <li className="single-li">Renovation</li>
          </ul>
          <hr className="border-bottom border border-dark border-3 mb-4" />   
          <Row className="g-4 mb-5">
            {packages.slice(0, 6).map((pkg) => (
              <Package key={pkg._id} package={pkg}></Package>
            ))}
          </Row>
        </Container>
      )}
    </div>
  );
};

export default Packages;
