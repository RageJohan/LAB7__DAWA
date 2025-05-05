import React from "react";
import { Card } from "react-bootstrap";

export default function BoardAdmin() {
  return (
    <div className="container mt-5">
      <Card>
        <Card.Body>
          <Card.Title>Contenido para administradores</Card.Title>
          <Card.Text>
            Bienvenido, eres un administrador. Aquí puedes gestionar todos los aspectos de la plataforma.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
