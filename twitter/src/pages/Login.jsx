import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login("Leonardo");
    navigate("/profile");
  };

  return (
    <div>
      <h1>Login</h1>

      <button onClick={handleLogin}>
        Iniciar sesión
      </button>
    </div>
  );
}

export default Login;