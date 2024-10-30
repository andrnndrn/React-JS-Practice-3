import React from "react";

export default function StudentForm({
  toggleModal,
  student,
  onChange,
  onSubmit,
  isEdit,
}) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Form New Student</h5>
          <button
            type="button"
            className="btn-close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={() => toggleModal(isEdit)}
          ></button>
        </div>
        <div className="modal-body">
          <form>
            <div className="MB-3">
              <label htmlFor="name" className="form-label">
                Student Name
              </label>
              <input
                type="text"
                value={student.name}
                onChange={onChange}
                name="name"
                id="name"
                className="form-control"
              />
            </div>
            <div className="MB-3">
              <label htmlFor="name" className="form-label">
                NIM
              </label>
              <input
                type="text"
                value={student.nim}
                onChange={onChange}
                name="nim"
                id="nim"
                inputMode="numeric"
                className="form-control"
              />
            </div>
            <div className="MB-3">
              <label htmlFor="birthDate" className="form-label">
                Birth Date
              </label>
              <input
                type="date"
                value={student.birthDate}
                onChange={onChange}
                name="birthDate"
                id="birthDate"
                className="form-control"
              />
            </div>
            <div className="MB-3">
              <label htmlFor="name" className="form-label">
                Address
              </label>
              <textarea
                name="address"
                value={student.address}
                onChange={onChange}
                id="address"
                className="form-control"
              />
            </div>
            <div className="MB-3">
              <label htmlFor="name" className="form-label">
                Guardian Name
              </label>
              <input
                type="text"
                value={student.guardianName}
                onChange={onChange}
                name="guardianName"
                id="guardianName"
                className="form-control"
              />
            </div>
          </form>
        </div>
        <div className="modal-footer mt-5">
          {isEdit ? (
            <button type="button" className="btn btn-primary">
              <i className="bi bi-save"></i> Update
            </button>
          ) : (
            <button type="button" className="btn btn-primary">
              <i className="bi bi-save"></i> Submit
            </button>
          )}
          <button type="button" className="btn btn-primary">
            <i className="bi bi-save"></i> Submit
          </button>
        </div>
      </div>
    </div>
  );
}
