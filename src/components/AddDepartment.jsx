import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormGroup,
  FormLabel,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { createDepartment } from "../service/api";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

const initialValues = {
  departmentName: "",
  departmentDescription: "",
};

const AddDepartment = () => {
  const [department, setDepartment] = useState(initialValues);
  const [errorMessage, setErrorMessage] = useState("");
  const [validate, setValidate] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setDepartment({ ...department, [e.target.name]: e.target.value });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    if (
      department.departmentName.trim() === "" ||
      department.departmentDescription.trim() === ""
    ) {
      setValidate(true);
      setErrorMessage("Field is required");
    } else {
      await createDepartment(department);
      navigate("/allDepartment");
    }
  };

  return (
    <Container>
      <Typography variant="h4">Add Department</Typography>
      <FormControl>
        <FormLabel>Department Name</FormLabel>
        <TextField
          onChange={(e) => handleChange(e)}
          name="departmentName"
          required
          error={validate}
          helperText={errorMessage}
          size="small"
        ></TextField>
      </FormControl>
      <FormControl>
        <FormLabel>Department Description</FormLabel>
        <TextField
          onChange={(e) => handleChange(e)}
          name="departmentDescription"
          required
          error={validate}
          helperText={errorMessage}
          size="small"
        ></TextField>
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={(e) => handleAdd(e)} type="submit">
          Add Department
        </Button>
      </FormControl>
    </Container>
  );
};

export default AddDepartment;
