import { AddButton, LoginButton } from "./Button";

export function InputCard({
  username,
  setUserName,
  email,
  setEmail,
  password,
  setPassword,
  errorMessage,
  handleSubmit,
}) {
  return (
    <div>
      <div className="header">
        <h3>Student Managament System</h3>
      </div>

      <div className="input-wrapper">
        <form onSubmit={handleSubmit}>
          <div className="form-card">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              placeholder="enter your name"
              required
              onChange={(event) => {
                setUserName(event.target.value);
              }}
            />
          </div>
          <div className="form-card">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              value={email}
              placeholder="enter email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              required
            />
          </div>
          <div className="form-card">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              required
            />{" "}
            {errorMessage && (
              <span className="error-banner">{errorMessage}</span>
            )}
          </div>
          <LoginButton />
        </form>
      </div>
    </div>
  );
}

export function StudentInput({
  studentname,
  setStudentName,
  studentage,
  setStudentAge,
  gender,
  setGender,
  course,
  setCourse,
  handleSubmit, errorMessage
}) {
  return (
    <div className="student-form">
      <h3>Add Student</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-card">
          <label htmlFor="student-name">Student Name</label>
          <input
            type="text"
            id="student-name"
            value={studentname}
            placeholder="enter student name"
            onChange={(event) => {
              setStudentName(event.target.value);
            }}
            required
          />
        </div>
        <div className="input-card">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            value={studentage}
            placeholder="enter age"
            onChange={(event) => {
              setStudentAge(event.target.value);
            }}
            required
          />
        </div>
        <div className="input-card">
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            value={gender}
            onChange={(event) => {
              setGender(event.target.value);
            }}
            required
          >
            <option value="" disabled>
              Select Gender
            </option>
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
        </div>
        <div className="input-card">
          <label htmlFor="course">Course</label>
          <input
            type="text"
            id="course"
            value={course}
            placeholder="enter student major"
            onChange={(event) => {
              setCourse(event.target.value);
            }}
            required
          />
        </div>
        {errorMessage && ( <span className="error-banner">{errorMessage}</span>)}
        <AddButton/>
      </form>
    </div>
  );
}
