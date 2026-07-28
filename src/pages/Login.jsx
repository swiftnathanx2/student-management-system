import { InputCard } from "../components/InputField";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export function Login() {
  const navigate = useNavigate();

  const [username, setUserName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const { login } = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorMessage("");

    if (password.length < 8) {
      setErrorMessage(`Password must be at least 8 characters long.`);
      return;
    }

    login(username);
    navigate("/dashboard");
  };
  return (
    <div className="login-wrapper">
      <InputCard
        username={username}
        setUserName={setUserName}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        errorMessage={errorMessage}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
