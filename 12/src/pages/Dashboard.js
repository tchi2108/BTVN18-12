import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Container,
    Box,
    Paper,
    List,
    ListItem,
    ListItemText,
  } from "@mui/material";
  import { useNavigate } from "react-router-dom";
  import { logout } from "../utils/auth";
  
  const Dashboard = () => {
    const navigate = useNavigate();
  
    const products = ["Laptop", "Phone", "Tablet"];
    const users = ["Admin", "User", "Guest"];
  
    const handleLogout = () => {
      logout();
      navigate("/login");
    };
  
    return (
      <>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Admin Dashboard
            </Typography>
  
            <Button color="inherit">Quản lý sản phẩm</Button>
            <Button color="inherit">Quản lý users</Button>
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
  
        <Container sx={{ mt: 4 }}>
          <Box display="flex" gap={4}>
            <Paper sx={{ p: 2, flex: 1 }}>
              <Typography variant="h6">Quản lý sản phẩm</Typography>
              <List>
                {products.map((p, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={p} />
                  </ListItem>
                ))}
              </List>
            </Paper>
  
            <Paper sx={{ p: 2, flex: 1 }}>
              <Typography variant="h6">Quản lý users</Typography>
              <List>
                {users.map((u, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={u} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Box>
        </Container>
      </>
    );
  };
  
  export default Dashboard;
