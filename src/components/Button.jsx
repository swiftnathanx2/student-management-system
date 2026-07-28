import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export function LoginButton() {
  return (
    <div>
      <div className="btn">
        <button type="submit">Login</button>
      </div>
    </div>
  );
}

export function LogoutButton() {
  const navigate = useNavigate();
  const { logout } = useContext(UserContext);
  return (
    <div>
      <div className="btn">
        <button
          type="button"
          onClick={() => {
            logout();
            navigate("/");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export function BackButton() {
  const { goback } = useContext(UserContext);

  return (
    <div className="btn">
      <button type="button" onClick={goback}>
        Go Back
      </button>
    </div>
  );
}

export function AddButton() {
  return (
    <div>
      <button type="submit" className="btn">
        Add Student
      </button>
    </div>
  );
}
