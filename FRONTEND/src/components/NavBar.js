import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthService from "../services/auth.service";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function NavBar() {
  const [role, setRole] = useState(null);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      if (user.roles.includes("ROLE_ADMIN")) setRole("admin");
      else if (user.roles.includes("ROLE_MODERATOR")) setRole("moderator");
      else if (user.roles.includes("ROLE_USER")) setRole("user");
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
    window.location.reload();
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Laboratorio 7</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            {role === "admin" && <Nav.Link as={Link} to="/admin">Administradores</Nav.Link>}
            {role === "moderator" && <Nav.Link as={Link} to="/mod">Moderadores</Nav.Link>}
            {role === "user" && <Nav.Link as={Link} to="/user">Usuarios</Nav.Link>}
          </Nav>
          <Nav>
            {currentUser ? (
              <>
                <Nav.Link as={Link} to="/profile">{currentUser.username}</Nav.Link>
                <Nav.Link onClick={logOut}>Cerrar sesión</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">Iniciar sesión</Nav.Link>
                <Nav.Link as={Link} to="/register">Registrarse</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
