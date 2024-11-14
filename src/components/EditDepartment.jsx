import React, { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  FormGroup,
  FormLabel,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import {
  getDepartmentById,
  updateDepartment,
} from "../service/api";

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

const EditDepartment = () => {
  const [department, setDepartment] = useState(initialValues);
  const [errorMessage, setErrorMessage] = useState("");
  const [validate, setValidate] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getDepartmentData();
  }, []);

  const getDepartmentData = async () => {
    let response = await getDepartmentById(id);
    setDepartment(response.data);
  };

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
      await updateDepartment(department, id);
      navigate("/allDepartment");
    }
  };

  return (
    <Container>
      <Typography variant="h4">Edit Department</Typography>
      <FormControl>
        <FormLabel>Department Name</FormLabel>
        <TextField
          onChange={(e) => handleChange(e)}
          name="departmentName"
          required
          error={validate}
          helperText={errorMessage}
          size="small"
          value={department.departmentName}
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
          value={department.departmentDescription}
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

export default EditDepartment;
