import React from "react";

export default function StudentDetail({ toggleModal }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Student Detail</h5>
          <button
            type="button"
            className="btn-close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={toggleModal}
          ></button>
        </div>
        <div className="modal-body">
          <p>
            <strong>Name:</strong> Andrean Nurdiana
          </p>
          <p>
            <strong>NIM:</strong> 1185030021
          </p>
          <p>
            <strong>Address:</strong> Jl. Kebon Jeruk
          </p>
          <p>
            <strong>Guardian Name:</strong> Bidru
          </p>
        </div>
      </div>
    </div>
  );
}
