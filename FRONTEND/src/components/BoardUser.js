import React from "react";
import { Card } from "react-bootstrap";

export default function BoardUser() {
  return (
    <div className="container mt-5">
      <Card>
        <Card.Body>
          <Card.Title>Contenido para usuarios</Card.Title>
          <Card.Text>
            Bienvenido, eres un usuario. Aquí puedes gestionar tus datos y acceder a las funcionalidades asignadas a tu rol.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
