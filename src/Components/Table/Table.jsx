import React from "react";
import "./Table.scss";

const Table = ({ shipmentData }) => {

  const handleClick = (status) => {
    // Do something when the status is clicked
    console.log("Status clicked:", status);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered":
        return "green";
      case "Cancelled":
        return "red";
      case "Shipping":
        return "blue";
      case "Waiting Pickup":
        return "yellow";
      default:
        return "black"; // default color
    }
  };

  return (
    <div className="table-container">
      <table>
        <tbody>
          {shipmentData.map((shipment, index) => (
            <tr key={index}>
              <td>
                <a href="#" className="clickable">{shipment.batchId}</a>
              </td>
              <td>
                <a href="#" className="clickable">{shipment.shippingId}</a>
              </td>
              <td>{shipment.trackingLocation}</td>
              <td>{shipment.shippingAddress}</td>
              <td>
                <a
                  href="#"
                  className={`clickable2 ${getStatusColor(shipment.status)}`}
                  onClick={() => handleClick(shipment.status)}
                >
                  {shipment.status}
                </a>
              </td>
              <td>{shipment.estimatedArrival}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
