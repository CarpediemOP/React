import { useState } from "react";
import { createEmployee } from "../services/employeeService";

function EmployeeForm({ onSuccess }) {
  const [employee, setEmployee] = useState({
    name: "",
    department: "",
    salary: ""
  });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createEmployee(employee);
    onSuccess();
    setEmployee({ name: "", department: "", salary: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Employee</h3>

      <input
        name="name"
        placeholder="Name"
        value={employee.name}
        onChange={handleChange}
        required
      />

      <input
        name="department"
        placeholder="Department"
        value={employee.department}
        onChange={handleChange}
        required
      />

      <input
        name="salary"
        placeholder="Salary"
        type="number"
        value={employee.salary}
        onChange={handleChange}
        required
      />

      <button type="submit">Save</button>
    </form>
  );
}

export default EmployeeForm;