import React from "react";
import { Card } from "react-bootstrap";

export default function BoardModerator() {
  return (
    <div className="container mt-5">
      <Card>
        <Card.Body>
          <Card.Title>Contenido para moderadores</Card.Title>
          <Card.Text>
            Bienvenido, eres un moderador. Aquí puedes gestionar los usuarios y moderar contenido según las funcionalidades de tu rol.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
