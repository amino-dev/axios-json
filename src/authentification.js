import axios from "axios";
import React, {useState} from "react";

import { Form, Button, Container } from "react-bootstrap";

const Authentification = () => {
  const [details, setDetails] = useState({ email: "", password: ""});

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3004/posts", details)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={details.email}
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={details.password}
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Authentification ;