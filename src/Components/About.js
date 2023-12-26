import React from "react";
import { useState } from "react";

const About = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      id: id,
      name: name,
      age: age,
    };
    console.log("checking form submit!!!");
    console.log(formData);
    // create react application three inut fielded called id ,name, age and that values pass to backend
  };

  return (
    <div className="align-items-center">
      <h2>Student Details</h2>
      <form className="col-sm-6 align-center" onSubmit={handleSubmit}>
        <div className="mb-3 ">
          <label for="exampleInputEmail1" className="form-label">
            Student ID
          </label>
          <input
            type="text"
            className="form-control"
            name="id"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Student Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Student Age
          </label>
          <input
            type="text"
            className="form-control"
            name="age"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        {/* <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" for="exampleCheck1">Check me out</label>
          </div> */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default About;
