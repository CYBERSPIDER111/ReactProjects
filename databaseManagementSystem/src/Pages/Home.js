import React from "react";
import Budget from "./Budget";
import Employee from "./Employee";
import {data} from "../tableData";
import { NavLink } from "react-router-dom";
import { BsFillPlusSquareFill, BsCalendarDate } from "react-icons/bs";
import { Table,Button} from 'react-bootstrap';
import '../App.css';
import {useRoutes, Link, Route, Routes} from 'react-router-dom';

function Home() {
  return (
    <>
    
    <br></br>
    <div>
      <div className="row">
        <div className="col-sm">
          <Link to="/"><Button className="button">Department</Button></Link>
          <br></br>
          <Link to="/Employee"><Button className="button">Employee</Button></Link>
          <br></br>
          <Link to="/Budget"><Button className="button">Budget</Button></Link>
          <br></br>          
        </div>
        <div className="col-sm">
          <label for="dept">
            <h4>Department name : </h4>
          </label>
          <select name="dept" id="dept">
            <option value="HR">HR</option> <br></br>
            <option value="employee">Employee</option> <br></br>
            <option value="budget">Budget</option> <br></br>
          </select>
          <br></br>
          <label htmlFor="Name">
            <h4>Description : </h4>
            <p>This is HR Department of emeis. We take care of them.</p>
          </label>
          <h4>Start Date : </h4>
          {/* <span className="icon"><p>02/02/2023</p>
            <BsCalendarDate />
          </span> */}
          <button type="button" className="button">
            Cancel
          </button>
          <button type="button" className="button">
            Save
          </button>
          <hr></hr>
          <input type="text" placeholder="Search.."></input> <br></br>
          <NavLink to="/Add">
            <BsFillPlusSquareFill />
          </NavLink>
          <br></br>
          
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>Employee Name</th>
          <th>Age</th>
          <th>Nick Name</th>
          <th>Employee</th>
          <th>Department</th>
          <th>Joining Date</th>
          
        </tr>
      </thead>  
      
        {
          data.map((u)=>
          {
            return(
              
        <tbody key={u.id}>
        <tr>
          <td> {u.name}</td>
          <td>{u.age}</td>
          <td>{u.nick}</td>
          <td><input type={"checkbox"} checked={u.employee?true:false} /></td>
          <td>{u.department}</td>
          <td>{u.joining}</td>
          
        </tr>
        </tbody>
          
            )
          })
        }
      
      </Table>
          
          
          
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;
