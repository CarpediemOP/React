import api from "../api/axiosclient";

export const getEmployees = async (filters = {}) => {
  const res = await api.get("/Employees", {
    params: {
      search: filters.search || "",
      department: filters.department || "",
      sortOrder: filters.sortOrder || ""
    }
  });

  return res.data.data;
};

export const getEmployeeById = async (id) => {
  const res = await api.get(`/Employees/${id}`);
  return res.data.data;
};

export const createEmployee = async (employee) => {
  return await api.post("/Employees", employee);
};

export const updateEmployee = async (id, employee) => {
  return await api.put(`/Employees/${id}`, employee);
};

export const deleteEmployee = async (id) => {
  return await api.delete(`/Employees/${id}`);
};

export const getDepartments=async()=>{
    const res=await api.get("/Employees/departments");
    return res.data.data;
};
