import { useState, useEffect } from "react";

function About() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setEmployees(data.data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  console.log(employees);

  return (
    <>
      {employees.map((employee) => (
        <div key={employee.id}>
          <p>{employee.first_name}</p>
          <p>{employee.email}</p>
          <img src={employee.avatar} width="8%" alt="Avatar" />
        </div>
      ))}
      <div>About</div>
    </>
  );
}

export default About;
