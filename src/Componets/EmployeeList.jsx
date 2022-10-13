import React from "react";
import Employee from "./Employee";

class EmployeeList extends React.Component {
  state = {
    employees: [
      {
        id: 1,
        name: "Carlos",
        position: "Developer",
      },
      {
        id: 2,
        name: "Mario",
        position: "Web Developer",
      },
      {
        id: 3,
        name: "Jose",
        position: "RH",
      },
    ],
  };
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {this.state.employees.map((employee, index) => (
            <Employee
              key={index}
              id={employee.id}
              name={employee.name}
              position={employee.position}
              fire = {this.fireEmployee}
            />
          ))}
        </tbody>
      </table>
    );
  }

  fireEmployee = (id) => {
    const { employees } = this.state;
    this.setState({
      employees: employees.filter((employee) => employee.id !== id),
    });
  };
}

export default EmployeeList;