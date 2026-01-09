import { useEffect, useState } from "react";
import { getDepartments } from "../services/employeeService";

function EmployeeFilters({ filters, onChange }) {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    loadDepartments();
  }, []);

  const loadDepartments = async () => {
    const data = await getDepartments();
    setDepartments(data);
  };

  return (
    <div style={{ marginBottom: "15px" }}>
      <input
        placeholder="Search by name"
        value={filters.search}
        onChange={(e) =>
          onChange({ ...filters, search: e.target.value })
        }
      />

      <select
        value={filters.department}
        onChange={(e) =>
          onChange({ ...filters, department: e.target.value })
        }
      >
        <option value="">All Departments</option>
        {departments.map(dept => (
          <option key={dept} value={dept}>
            {dept}
          </option>
        ))}
      </select>

      <select
        value={filters.sortOrder}
        onChange={(e) =>
          onChange({ ...filters, sortOrder: e.target.value })
        }
      >
        <option value="">Sort by Salary</option>
        <option value="salary_asc">Low to High</option>
        <option value="salary_desc">High to Low</option>
      </select>
    </div>
  );
}

export default EmployeeFilters;