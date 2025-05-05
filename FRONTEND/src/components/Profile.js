import React, { useEffect, useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import AuthService from "../services/auth.service";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(AuthService.getCurrentUser());
  }, []);

  return (
    <div className="container mt-5">
      <Card>
        <Card.Header>Perfil del Usuario</Card.Header>
        <Card.Body>
          {user ? (
            <>
              <ListGroup variant="flush">
                <ListGroup.Item><strong>Usuario:</strong> {user.username}</ListGroup.Item>
                <ListGroup.Item><strong>Email:</strong> {user.email}</ListGroup.Item>
                <ListGroup.Item><strong>Roles:</strong> {user.roles.join(", ")}</ListGroup.Item>
              </ListGroup>
            </>
          ) : (
            <p>No has iniciado sesión.</p>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}
