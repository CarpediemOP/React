
import { useEffect, useState } from "react";
import {
  getEmployeeById,
  updateEmployee
} from "../services/employeeService";

function EmployeeEdit({ employeeId, onCancel, onSuccess }) {
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    loadEmployee();
  }, []);

  const loadEmployee = async () => {
    const data = await getEmployeeById(employeeId);
    setEmployee(data);
  };

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateEmployee(employeeId, employee);
    onSuccess();
  };

  if (!employee) return null;

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit Employee</h3>

      <input
        name="name"
        value={employee.name}
        onChange={handleChange}
      />

      <input
        name="department"
        value={employee.department}
        onChange={handleChange}
      />

      <input
        name="salary"
        type="number"
        value={employee.salary}
        onChange={handleChange}
      />

      <button type="submit">Update</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
}

export default EmployeeEdit;