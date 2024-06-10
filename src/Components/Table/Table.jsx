import React from "react";
import "./Table.scss";

const Table = ({ shipmentData }) => {
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
              <td>{shipment.status}</td>
              <td>{shipment.estimatedArrival}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
