import React from "react";

export default function StudentDetail({ toggleModal, student }) {
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
            <strong>Name:</strong> {student.name}
          </p>
          <p>
            <strong>Birth Date:</strong> {student.birthDate}
          </p>
          <p>
            <strong>NIM:</strong> {student.nim}
          </p>
          <p>
            <strong>Address:</strong> {student.address}
          </p>
          <p>
            <strong>Guardian Name:</strong> {student.guardianName}
          </p>
        </div>
      </div>
    </div>
  );
}
