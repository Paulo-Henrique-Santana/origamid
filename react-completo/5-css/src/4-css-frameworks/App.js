import React from "react";
import Card from "react-bootstrap/Card";

const App = () => {
  return (
    <Card bg="dark" text="white" className="m-5" style={{ maxWidth: "18rem" }}>
      <Card.Header>Notebook</Card.Header>
      <Card.Body>
        <Card.Title>R$ 2500</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          cum hic exercitationem velit. Tenetur cum, officia dignissimos iste
          eos vitae repudiandae quas cupiditate quibusdam error et? Libero
          consectetur sequi sapiente!
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default App;
