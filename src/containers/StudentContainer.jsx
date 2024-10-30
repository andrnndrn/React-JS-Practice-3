import React, { Component } from "react";
import StudentTable from "../components/StudentTable";
import StudentForm from "../components/StudentForm";
import StudentDetail from "../components/StudentDetail";

export default class StudentContainer extends Component {
  state = {
    modalForm: false,
    modalDetail: false,
    isEdit: false,
    editedStudent: null,

    students: [
      {
        name: "Andrean Nurdiana",
        nim: "1185030021",
        address: "Jl. Kebon Jeruk",
        guardianName: "Bidru",
      },
    ],
    currentStudent: {
      name: "",
      birthDate: "",
      nim: "",
      address: "",
      guardianName: "",
    },
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      currentStudent: {
        ...prevState.currentStudent,
        [name]: value,
      },
    }));
  };

  toggleModalForm = (isEdit = false) => {
    this.setState({ isEdit, modalForm: !this.state.modalForm });
  };

  handleEditStudent = (student, index) => {
    this.setState({
      modalForm: !this.state.modalForm,
      isEdit: true,
      currentStudent: student,
      editedStudent: index,
    });
  };
  toggleModalDetail = () => {
    this.setState({ modalDetail: !this.state.modalDetail });
  };

  handleAddOrUpdateeStudent = () => {
    const currentStudent = this.state;

    if (isEdit) {
      const index = this.state.editedStudent;
      const updateStudent = [...this.state.students];
      updateStudent[index] = currentStudent.currentStudent;
      this.setState({ students: updateStudent });
    } else {
      this.setState((prevState) => ({
        students: [...prevState.students, currentStudent],
      }));
      this.setState({
        currentStudent: {
          name: "",
          birthDate: "",
          nim: "",
          address: "",
          guardianName: "",
        },
      });
      this.toggleModalForm(this.state.isEdit);
    }
  };
  render() {
    return (
      <>
        <StudentTable
          students={this.state.students}
          toggleModalForm={this.toggleModalForm}
          toggleModalDetail={this.toggleModalDetail}
        />

        {this.state.modalForm && (
          <StudentForm
            isEdit={this.state.isEdit}
            onSubmit={this.handleAddOrUpdateeStudent}
            onChange={this.handleInputChange}
            toggleModal={this.toggleModalForm}
            student={this.state.currentStudent}
          />
        )}

        {this.state.modalDetail && (
          <StudentDetail toggleModal={this.toggleModalDetail} />
        )}
      </>
    );
  }
}
