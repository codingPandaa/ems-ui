import React, { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  FormGroup,
  FormLabel,
  MenuItem,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import {
  getAllDepartment,
  getEmployeeById,
  updateEmployee,
} from "../service/api";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  departmentId: "",
};

const EditEmployee = () => {
  const [employee, setEmployee] = useState(initialValues);
  const [errorMessage, setErrorMessage] = useState("");
  const [validate, setValidate] = useState(false);
  const [departments, setDepartments] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getEmployeeData();
    getDepartmentDetails();
  }, []);

  const getDepartmentDetails = async () => {
    let respone = await getAllDepartment();
    setDepartments(respone.data);
  };

  const getEmployeeData = async () => {
    let response = await getEmployeeById(id);
    setEmployee(response.data);
  };

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    if (
      employee.firstName.trim() === "" ||
      employee.lastName.trim() === "" ||
      employee.email.trim() === "" ||
      employee.departmentId === ""
    ) {
      setValidate(true);
      setErrorMessage("Field is required");
    } else {
      await updateEmployee(employee, id);
      navigate("/allEmployee");
    }
  };

  return (
    <Container>
      <Typography variant="h4">Edit Employee</Typography>
      <FormControl>
        <FormLabel>First Name</FormLabel>
        <TextField
          onChange={(e) => handleChange(e)}
          name="firstName"
          value={employee.firstName}
          size="small"
          required
          error={validate}
          helperText={errorMessage}
        ></TextField>
      </FormControl>
      <FormControl>
        <FormLabel>Last Name</FormLabel>
        <TextField
          onChange={(e) => handleChange(e)}
          name="lastName"
          value={employee.lastName}
          size="small"
          required
          error={validate}
          helperText={errorMessage}
        ></TextField>
      </FormControl>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <TextField
          onChange={(e) => handleChange(e)}
          name="email"
          size="small"
          value={employee.email}
          required
          error={validate}
          helperText={errorMessage}
        ></TextField>
      </FormControl>
      <FormControl>
        <FormLabel>Department</FormLabel>
        <TextField
          select
          size="small"
          label="Select Department"
          required
          error={validate}
          helperText={errorMessage}
          onChange={(e) => handleChange(e)}
          name="departmentId"
          value={employee.departmentId}
          style={{ marginTop: "7px" }}
        >
          {departments.map((department) => (
            <MenuItem key={department.id} value={department.id}>
              {department.departmentName}
            </MenuItem>
          ))}
        </TextField>
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={(e) => handleAdd(e)}>
          Submit
        </Button>
      </FormControl>
    </Container>
  );
};

export default EditEmployee;
