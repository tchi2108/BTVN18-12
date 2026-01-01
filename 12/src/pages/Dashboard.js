import { useNavigate } from "react-router-dom";
import { logout } from "../utils/auth";

const Dashboard = () => {
  const navigate = useNavigate();

  const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" },
  ];

  const users = [
    { id: 1, name: "Admin" },
    { id: 2, name: "User" },
  ];

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div style={{ padding: 40 }}>
      <header>
        <h2>Dashboard</h2>
        <button onClick={handleLogout}>Logout</button>
      </header>

      <hr />

      <h3>Quản lý sản phẩm</h3>
      <ul>
        {products.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>

      <h3>Quản lý users</h3>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
