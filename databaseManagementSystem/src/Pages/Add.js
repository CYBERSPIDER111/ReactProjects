import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { v4 as uuidv4 } from 'uuid';
import Button from "react-bootstrap/Button";
import {data} from '../tableData';
import {Link, useNavigate} from 'react-router-dom';

function Add() {
  const [name,setName]=useState('');
  const [age,setAge]=useState('');
  const [nick,setNick]=useState('');
  const [employee,setEmployee]=useState('');
  const [joining,setJoining]=useState('');
  const [department,setDepartment]=useState('');

  let history = useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault();
    const ids=uuidv4();
    let u=ids.slice(0,8);

    let a=name,
    b=age,
    c=nick,
    d=employee,
    g=department,
    f=joining;
    data.push({id: u,name: a,age:b, nick:c, employee:d, department: g, joining:f});

    history('/');

  }

  const handleCancel=()=>{
    setAge(0);
    setName("");
    setNick("");
    setEmployee(false);
    setDepartment("");

}

const handleDepart=(e)=>{
  setDepartment(e.target.value);
 
}


  return (
    <>
    <div>
      <Form className="d-grid gap-2" style={{margin:"15rem"}}> 
      <Form.Group className="mb-3" controlId="formName">
      <Form.Label><h4>Name</h4></Form.Label>
        <Form.Control type="text" placeholder="enter the name" required onChange={(e)=>setName(e.target.value)}>
        </Form.Control>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formAge">
      <Form.Label><h4>Age</h4></Form.Label>
        <Form.Control type="text" placeholder="Only in numbers" required onChange={(e)=>setAge(e.target.value)}>
        </Form.Control>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formNick">
      <Form.Label><h4>Nickname</h4></Form.Label>
        <Form.Control type="text" placeholder="enter nickname" required onChange={(e)=>setNick(e.target.value)}>
        </Form.Control>
      </Form.Group>
      <Form.Group className="mb-3">
          <Form.Label><h4>Employee Department</h4></Form.Label>
         

          <Form.Select onChange={handleDepart} aria-label="Default select example">
      <option >Open this select menu</option>
      <option  value="Manager">Manager</option>
      <option value="Hr">Hr</option>
      <option value="Developer">Developer</option>
      <option value="CEO">CEO</option>
      <option value="CTO">CTO</option>
      <option  value="Software Architect">Software Architect</option>
      <option value="Intern">Intern</option>
    </Form.Select>
       
        </Form.Group>
      <Form.Group className="mb-3" controlId="formJoining">
      <Form.Label><h4>Joining Date</h4></Form.Label>
        <Form.Control type="text" placeholder="dd/mm/yyyy" required onChange={(e)=>setJoining(e.target.value)}>
        </Form.Control>
      </Form.Group>
      <Form.Group className="mb-3">
        <h4>If employee, then tick otherwise ignore</h4>
          <Form.Check type="checkbox" placeholder="Are you Employee" required onChange={(e)=>setEmployee(e.target.value)}/>
        </Form.Group>
      <Button variant="success" type="submit" onClick={(e)=> handleSubmit(e)}>Submit</Button>
      <Button variant="dark" onClick={handleCancel}>Cancel</Button>





      </Form>
    </div>
    
    </>
  )
}

export default Add
