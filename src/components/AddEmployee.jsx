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
import { useNavigate } from "react-router-dom";
import { createEmployee, getAllDepartment } from "../service/api";

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
  departmentId:"",
};

const AddEmployee = () => {
  const [employee, setEmployee] = useState(initialValues);
  const [errorMessage, setErrorMessage] = useState("");
  const [validate, setValidate] = useState(false);
  const [departments, setDepartments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getDepartmentDetails();
  }, []);

  
  const getDepartmentDetails = async () => {
    let respone = await getAllDepartment();
    setDepartments(respone.data);
  };

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };
  
  const handleAdd = async (e) => {
    
    console.log(employee);
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
      await createEmployee(employee);
      navigate("/allEmployee");
    }
  };
  

  return (
    <Container>
      <Typography variant="h4">Add Employee</Typography>
      <FormControl>
        <FormLabel>First Name</FormLabel>
        <TextField
          onChange={(e) => handleChange(e)}
          name="firstName"
          required
          error={validate}
          helperText={errorMessage}
          size="small"
        ></TextField>
      </FormControl>
      <FormControl>
        <FormLabel>Last Name</FormLabel>
        <TextField
          onChange={(e) => handleChange(e)}
          name="lastName"
          required
          error={validate}
          helperText={errorMessage}
          size="small"
        ></TextField>
      </FormControl>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <TextField
          onChange={(e) => handleChange(e)}
          name="email"
          required
          error={validate}
          helperText={errorMessage}
          size="small"
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
        <Button variant="contained" onClick={(e) => handleAdd(e)} type="submit">
          Submit
        </Button>
      </FormControl>
    </Container>
  );
};

export default AddEmployee;
