import React, { useState } from "react";
import "./Dashboard.scss";
import SideBar from "../../Components/sidebar/SideBar.jsx";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Table from "../../Components/Table/Table.jsx"; // Adjust the import path as needed
import PageButtons from "../../Components/PageButtons/PageButtons.jsx";

const sampleShipmentData = [
  {
    batchId: "001",
    shippingId: "2602177051",
    trackingLocation: "New York, NY",
    shippingAddress: "123 Main St, NY 10001",
    status: "Delivered",
    estimatedArrival: "15/06/2024",
  },
  {
    batchId: "002",
    shippingId: "2602177052",
    trackingLocation: "Los Angeles, CA",
    shippingAddress: "456 Maple Ave, CA 90001",
    status: "Delivered",
    estimatedArrival: "16/06/2024",
  },
  {
    batchId: "003",
    shippingId: "2602177053",
    trackingLocation: "Chicago, IL",
    shippingAddress: "789 Oak St, IL 60601",
    status: "Shipping",
    estimatedArrival: "17/06/2024",
  },
  {
    batchId: "004",
    shippingId: "2602177054",
    trackingLocation: "Houston, TX",
    shippingAddress: "321 Pine Rd, TX 77001",
    status: "Waiting Pickup",
    estimatedArrival: "18/06/2024",
  },
  {
    batchId: "005",
    shippingId: "2602177055",
    trackingLocation: "Phoenix, AZ",
    shippingAddress: "654 Cedar Ln, AZ 85001",
    status: "Waiting Pickup",
    estimatedArrival: "19/06/2024",
  },
  {
    batchId: "006",
    shippingId: "2602177056",
    trackingLocation: "Philadelphia, PA",
    shippingAddress: "987 Birch Blvd, PA 19101",
    status: "Cancelled",
    estimatedArrival: "20/06/2024",
  },
  {
    batchId: "007",
    shippingId: "2602177057",
    trackingLocation: "San Antonio, TX",
    shippingAddress: "123 Elm St, TX 78201",
    status: "Cancelled",
    estimatedArrival: "21/06/2024",
  },
  {
    batchId: "008",
    shippingId: "2602177058",
    trackingLocation: "San Diego, CA",
    shippingAddress: "456 Palm Dr, CA 92101",
    status: "Shipping",
    estimatedArrival: "22/06/2024",
  },
];

function Dashboard() {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  function Dashboard() {
  const [activeButton, setActiveButton] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // State to manage current page
  const itemsPerPage = 5; // Number of items per page
  const totalPages = Math.ceil(sampleShipmentData.length / itemsPerPage); // Calculate total pages

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="home">
      <SideBar />
      <div className="homeContainer">
        <Navbar />
        <div className="shipment">Shipments</div>
        <div className="buttonsContainer">
          {/* Your button components here */}
        </div>
        <div className="shipment-container">
          <div id="shipment" className="shipment-fields">
            {/* Your field components here */}
          </div>
        </div>
        <Table
          shipmentData={sampleShipmentData.slice(
            (currentPage - 1) * itemsPerPage,
            currentPage * itemsPerPage
          )}
        />
        <PageButtons
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        /> {/* Render PageButtons component */}
      </div>
    </div>
  );
}
  return (
    <div className="home">
      <SideBar />
      <div className="homeContainer">
        <Navbar />
        <div className="shipment">Shipments</div>
        <div className="buttonsContainer">

          <button
            className={`button ${activeButton === "viewAll" ? "active" : ""}`}
            onClick={() => handleButtonClick("viewAll")}
          >
            View All
          </button>
          <button
            className={`button ${activeButton === "inProgress" ? "active" : ""}`}
            onClick={() => handleButtonClick("inProgress")}
          >
            In Progress
          </button>
          <button
            className={`button ${activeButton === "completed" ? "active" : ""}`}
            onClick={() => handleButtonClick("completed")}
          >
            Completed
          </button>
          <button
            className={`button ${activeButton === "cancelled" ? "active" : ""}`}
            onClick={() => handleButtonClick("cancelled")}
          >
            Cancelled
            
          </button>
          
        </div>
        <div className="shipment-container">
          <div id="shipment" className="shipment-fields">
            <div className="field">Batch ID</div>
            <div className="field">Shipping ID</div>
            <div className="field">Tracking Location</div>
            <div className="field">Shipping Address</div>
            <div className="field">Status Approval</div>
            <div className="field">Estimated Arrival</div>
          </div>
        </div>
        <Table shipmentData={sampleShipmentData} />
        
      </div>
    </div>
    
  );
}



export default Dashboard;
