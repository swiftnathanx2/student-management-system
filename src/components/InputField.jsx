import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";

export function InputCard() {
  const navigate = useNavigate();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorMessage("");

    if (password.length < 8) {
      setErrorMessage(`Password must be at least 8 characters long.`);
      return;
    }
    navigate("/dashboard");
  };

  return (
    <div>
      <div className="header">
        <h3>Student Managament System</h3>
      </div>
      {errorMessage && <p className="error-banner">{errorMessage}</p>}
      <div className="input-wrapper">
        <form onSubmit={handleSubmit}>
          <div className="form-card">
            <label htmlFor="user-name">Name :</label>
            <input
              type="text"
              id="user-name"
              value={name}
              placeholder="enter your name"
              required
              onChange={(event) => {
                setName(event.target.value);
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
            />
          </div>
          <Button />
        </form>
      </div>
    </div>
  );
}
