import { useEffect, useState } from "react";
import {
  getEmployees,
  deleteEmployee
} from "../services/employeeService";
import EmployeeFilters from "./EmployeeFilters";

function EmployeeList({ onEdit }) {
  const [employees, setEmployees] = useState([]);
  const [filters, setFilters] = useState({
    search: "",
    department: "",
    sortOrder: ""
  });

  const loadEmployees = async () => {
    const data = await getEmployees(filters);
    setEmployees(data);
  };

  useEffect(() => {
    loadEmployees();
  }, [filters]);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete employee?")) return;
    await deleteEmployee(id);
    loadEmployees();
  };

  return (
    <div>
      <h2>Employees</h2>

      <EmployeeFilters
        filters={filters}
        onChange={setFilters}
      />

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp.id}>
              <td>{emp.name}</td>
              <td>{emp.department}</td>
              <td>{emp.salary}</td>
              <td>
                <button onClick={() => onEdit(emp.id)}>
                  Edit
                </button>
                <button onClick={() => handleDelete(emp.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;