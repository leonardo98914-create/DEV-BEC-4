import { useAuth } from "../context/AuthContext";

function Profile() {
  const { user } = useAuth();

  return (
    <div>
      <h1>Perfil</h1>

      <h2>{user.username}</h2>
    </div>
  );
}

export default Profile;