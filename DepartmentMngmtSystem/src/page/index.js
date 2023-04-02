import React, { useState } from 'react';
import "./index.css";
import Swal from 'sweetalert2';
import Add from './Add';
import Header from './Header';
import { employeesData } from '../Get';

function Dashboard() {

  const [employees, setEmployees] = useState(employeesData);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

  return (
<>
    <div className='container'>
            {/* List */}
            {!isAdding && !isEditing && (
                <>
                    <Header
                        setIsAdding={setIsAdding}
                    />
                    
                </>
            )}
            {/* Add */}
            {isAdding && (
                <Add
                    employees={employees}
                    setEmployees={setEmployees}
                    setIsAdding={setIsAdding}
                />
            )}
            </div>
           

    
    

    <div> 
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src="logo.jpg" className="polo"/>
              Emeis - Department Management System
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                   
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <br></br>
  
        <div className="container">
          <div className="row">
            <div className="col-sm">
              
                <a href="App" className="section">Department</a>
                <br></br>
                <a href="Employee" className="section">Employee</a>
                <br></br>
                <a href="Budget" className="section">Budget</a>
                <br></br>
            </div>
            <div className="col-sm">
              <label for="dept">
                <h4>Department name : </h4>
              </label>
      
              <select name="dept" id="dept">
                <option value="HR">HR</option>
                <option value="employee">Employee</option>
                <option value="budget">Budget</option>
              </select>
      
              <br></br>
              <label htmlFor="Name">
                <h4>Description : </h4>
                <p>
                This is HR Department of emeis. We take care of them.
              </p>
      
              </label>
              
              <h4>Start Date : </h4><p>02/02/2023</p>
              
              <button type="button" className="button">
                Cancel
              </button>
              <button type="button" className="button">
                Save
              </button>
              <hr></hr>
             
              <input type="text" placeholder="Search.."></input> <br></br>
              {/* <button onClick={apple}>click to add member</button> */}
              
            
          <img src="add.jpg" className="add"/>
      <br></br>

      <div classNameName='contain-table'>
            <table classNameName='striped-table'>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Salary</th>
                        <th>Date</th>
                        <th colSpan={2} classNameName="text-center">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {employees.length > 0 ? (
                        employees.map((employee, i) => (
                            <tr key={employee.id}>
                                <td>{i + 1}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                {/* <td>{formatter.format(employee.salary)}</td> */}
                                <td>{employee.date} </td>
                                
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7}>No Employees</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>

          {/* <table className="table table-dark">
            <thead>
              <tr>
                <th scope="col">Employee name</th>
                <th scope="col">Age</th>
                <th scope="col">Nickname</th>
                <th scope="col">Employee</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Dev</th>
                <td>20</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">Priyesh</th>
                <td>22</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">larry</th>
                <td>30</td>
                <td>limnus</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table> */}

          
            </div>
          </div>
          </div>
        </div></>
    // </div>  
  )
}

export default Dashboard
