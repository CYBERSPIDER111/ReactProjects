import React from 'react';
import {useRoutes, Link, Route, Routes} from 'react-router-dom';
import { Table,Button} from 'react-bootstrap';

function Budget() {
  return (
    <>
    <br></br>
    <div>
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
          <h2>Hello, This is Budget</h2>         
        </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Budget
