import React, { useEffect, useState } from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { deleteEmployeeById, getAllEmployees } from "../service/api";

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px auto 0 auto;
`;

const StyledButton = styled(Button)`
  width: inherit;
  margin: 20px auto 0 50px;
`;

const Thead = styled(TableRow)`
  background: #000;

  & > th {
    color: #fff;
    font-size: 20px;
  }
`;

const TBody = styled(TableRow)`
  & > th {
    font-size: 20px;
  }
`;

const AllEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getEmployeeDetails();
  }, []);

  const getEmployeeDetails = async () => {
    let respone = await getAllEmployees();
    setEmployees(respone.data);
  };

  const handleDelete = async (id) => {
    await deleteEmployeeById(id);
    getEmployeeDetails();
  }

  const handleAdd = () => {
    navigate("/addEmployee");
  };

  return (
    <>
      <StyledTable>
      <TableHead>
        <Thead>
          <TableCell>Id</TableCell>
          <TableCell>First Name</TableCell>
          <TableCell>Last Name</TableCell>
          <TableCell>Email Id</TableCell>
          <TableCell>Actions</TableCell>
        </Thead>
      </TableHead>
      <TableBody>
        {employees.map((employee,index) => (
          <TBody key={index}>
            <TableCell>{employee.id}</TableCell>
            <TableCell>{employee.firstName}</TableCell>
            <TableCell>{employee.lastName}</TableCell>
            <TableCell>{employee.email}</TableCell>
            <TableCell>
              <Button
                variant="contained"
                color="secondary"
                style={{ marginRight: 10 }}
                component={Link}
                to={`/editEmployee/${employee.id}`}
              >
                Edit
              </Button>
              <Button variant="contained" onClick={() => handleDelete(employee.id)}>Delete</Button>
            </TableCell>
          </TBody>
        ))}
      </TableBody>
    </StyledTable>
    <StyledButton variant="contained" onClick={() => handleAdd()}>Add Employee</StyledButton>
    </>
    
  );
};

export default AllEmployee;
