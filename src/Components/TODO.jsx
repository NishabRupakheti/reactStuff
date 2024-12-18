import React, {useState} from "react";
import Alert from 'react-bootstrap/Alert';


const TODO = () => {

  const [count , setCount] = useState(0)

  const increaseCount = ()=>{
    setCount(count  + 1)
  }

  return (
    <>
      <div
        className="container card mt-4 p-3 text-center"
        style={{ fontSize: "2rem" }}
      >
        Button clicker
      </div>
      <div className="container text-center" style={{fontSize:"24px" , fontFamily:"monospace"}}>
      <Alert variant={"success"}>
      Counter : {count} <br />
        </Alert>
    
        <button className="btn btn-outline-dark p-2 mt-4" style={{fontSize:"20px"}} onClick={increaseCount} > Click me </button>
      </div>
    </>
  );
};

export default TODO;
