import axios from "axios";

const API_URL = "http://localhost:8080/api/employees";

const DEPARTMENT_API_URL = "http://localhost:8080/api/departments";


// EMPLOYEE

export const getAllEmployees = async () => {
    try {
      return await axios.get(`${API_URL}`);
    } catch (error) {
      console.log("error while calling getAllUser api", error.message);
    }
  };

  export const createEmployee = async (data) => {
    try {
      return await axios.post(`${API_URL}`, data);
    } catch (error) {
      console.log("error while calling createEmployee api", error.message);
    }
  };

  export const deleteEmployeeById = async (id) => {
    try {
      return await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
      console.log("error while calling deleteEmployeeById api ", error.message);
    }
  };

  export const updateEmployee = async (data, id) => {
    try {
      return await axios.put(`${API_URL}/${id}`, data);
    } catch (error) {
      console.log("error while calling updateEmployee api", error.message);
    }
  };


  export const getEmployeeById = async (id) => {
    try {
      return await axios.get(`${API_URL}/${id}`);
    } catch (error) {
      console.log("error while calling getEmployeeById api", error.message);
    }
  };


  // DEPARTMENT

  export const getAllDepartment = async () => {
    try {
      return await axios.get(`${DEPARTMENT_API_URL}`);
    } catch (error) {
      console.log("error while calling getAllDepartment api", error.message);
    }
  };

  export const createDepartment = async (data) => {
    try {
      return await axios.post(`${DEPARTMENT_API_URL}`, data);
    } catch (error) {
      console.log("error while calling createDepartment api", error.message);
    }
  };

  export const getDepartmentById = async (id) => {
    try {
      return await axios.get(`${DEPARTMENT_API_URL}/${id}`);
    } catch (error) {
      console.log("error while calling getDepartmentById api", error.message);
    }
  };

  export const updateDepartment = async (data, id) => {
    try {
      return await axios.put(`${DEPARTMENT_API_URL}/${id}`, data);
    } catch (error) {
      console.log("error while calling updateDepartment api", error.message);
    }
  };

  export const deleteDepartmentById = async (id) => {
    try {
      return await axios.delete(`${DEPARTMENT_API_URL}/${id}`);
    } catch (error) {
      console.log("error while calling deleteDepartmentById api ", error.message);
    }
  };