import { Routes, Route } from "react-router-dom";
import students from "./data/students";
import Dashboard from "./pages/Dashboard";
import { Students } from "./pages/Students";
import { Profile } from "./pages/Profile";
import { AddStudent } from "./pages/AddStudent";
import { Login } from "./pages/Login";
import { StudentDetails } from "./pages/StudentDetails";
import { RootLayout } from "./RootLayout";

import { useState } from "react";

function App() {
  const [studentsList, setStudentsList] = useState(students);
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route element={<RootLayout />}>
          <Route
            path="/students"
            element={<Students students={studentsList} />}
          />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/addstudent"
            element={
              <AddStudent
                students={studentsList}
                setStudents={setStudentsList}
              />
            }
          />
          <Route
            path="/students/:id"
            element={<StudentDetails students={studentsList} />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
