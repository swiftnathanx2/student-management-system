// import { AddButton } from "../components/Button";
import { StudentInput } from "../components/InputField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function AddStudent({ students, setStudents }) {
  const navigate = useNavigate();

  const [studentname, setStudentName] = useState("");
  const [studentage, setStudentAge] = useState("");
  const [gender, setGender] = useState("");
  const [course, setCourse] = useState("");
  const [errormessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorMessage("");

    if (!studentname || !studentage || !gender || !course) {
      setErrorMessage(`All fields are required!`);
      return;
    }

    const newStudent = {
      id: Date.now(),
      name: studentname,
      age: parseInt(studentage, 10),
      gender: gender,
      course: course,
    };

    setStudents([...students, newStudent]);
    navigate("/students");
  };

  return (
    <div>
      <StudentInput
        studentname={studentname}
        setStudentName={setStudentName}
        studentage={studentage}
        setStudentAge={setStudentAge}
        gender={gender}
        setGender={setGender}
        course={course}
        setCourse={setCourse}
        handleSubmit={handleSubmit}
        errormessage={errormessage}
      />
      
    </div>
  );
}
