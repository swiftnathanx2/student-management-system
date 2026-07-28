import { useParams, useNavigate } from "react-router-dom";

export function StudentDetails({ students }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const selectedStudent = students.find((s) => s.id === parseInt(id, 10));

  if (!selectedStudent) {
    return (
      <div className="student-profile-card">
        <h3>Student profile records not found.</h3>
        <button onClick={() => navigate("/students")}>Back to Directory</button>
      </div>
    );
  }

  return (
    <div className="student-profile-card">
      <h2>Student Details Profile</h2>
      <hr />
      <p>
        <strong>Full Name:</strong> {selectedStudent.name}
      </p>
      <p>
        <strong>Age:</strong> {selectedStudent.age}
      </p>
      <p>
        <strong>Gender:</strong> {selectedStudent.gender}
      </p>
      <p>
        <strong>Current Course:</strong> {selectedStudent.course}
      </p>
      <p>
        <strong>Email Address:</strong>{" "}
        {selectedStudent.email || "No email on file"}
      </p>
      <p>
        <strong>Phone Connection:</strong>{" "}
        {selectedStudent.phone || "No phone listed"}
      </p>
      <p>
        <strong>Current Level:</strong> {selectedStudent.level || "N/A"}
      </p>
      <br />
      <button onClick={() => navigate("/students")} className="back-btn">
        Go Back
      </button>
    </div>
  );
}
