import React from 'react'
import { AppBar, Toolbar, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';


const Header = styled(AppBar)`
    background: #111111;
`

const Tabs = styled(NavLink)`
    font-size: 20px;
    margin-right: 20px;
    color: inherit;
    text-decoration: none;
`

const NavBar = () => {
  return (
    <Header position='static'>
      <Toolbar>
        <Tabs to="/">EMS</Tabs>
        <Tabs to="/allEmployee">Employees</Tabs>
        <Tabs to="/allDepartment">Department</Tabs>
      </Toolbar>
    </Header>
  )
}

export default NavBar
