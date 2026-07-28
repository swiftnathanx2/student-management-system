// import students from "../data/students";
// import { AddButton, BackButton } from "./Button";
import { NavLink, Link } from "react-router-dom";

export function StudentRow({ students }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Course</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.gender}</td>
              <td>{student.course}</td>
              <td>{student.action}</td>
              <td>
              
                <Link to={`/students/${student.id}`}>
                  <button>View</button>
                </Link>
              </td>
              <td><button>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <BackButton /> */}
      <div className="add-students">
        <NavLink to="/addstudent">Add Student</NavLink>
      </div>
    </div>
  );
}
