import {
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { deleteDepartmentById, getAllDepartment } from "../service/api";

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


const AllDepartment = () => {
  const [departments, setDepartments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getDepartmentDetails();
  }, []);

  const getDepartmentDetails = async () => {
    let respone = await getAllDepartment();
    setDepartments(respone.data);
  };

  const handleDelete = async (id) => {
    await deleteDepartmentById(id);
    getDepartmentDetails();
  }

  const handleAdd = () => {
    navigate("/addDepartment");
  };

  return (
    <>
      <StyledTable>
        <TableHead>
          <Thead>
            <TableCell>Id</TableCell>
            <TableCell>Department Name</TableCell>
            <TableCell>Department Description</TableCell>
            <TableCell>Actions</TableCell>
          </Thead>
        </TableHead>
        <TableBody>
          {departments.map((department,index) => (
            <TBody key={index} >
              <TableCell>{department.id}</TableCell>
              <TableCell>{department.departmentName}</TableCell>
              <TableCell>{department.departmentDescription}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ marginRight: 10 }}
                  component={Link}
                  to={`/editDepartment/${department.id}`}
                >
                  Edit
                </Button>
                <Button variant="contained" onClick={() => handleDelete(department.id)}>Delete</Button>
              </TableCell>
            </TBody>
          ))}
        </TableBody>
      </StyledTable>
      <StyledButton variant="contained" onClick={() => handleAdd()}>Add Department</StyledButton>
    </>
  );
};

export default AllDepartment;
