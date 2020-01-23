import { Card, CardBody, Form, FormInput, FormGroup, Button, FormRadio } from "shards-react";
import Link from "next/link";

import axios from "axios";

const Index = (props) => {

  const handdleSubmit = async (e) => {
    e.preventDefault();
    try {
      const form = document.getElementById('login-form');
      const data = new FormData(form);


      const res = await axios.post(
        process.env.API_URL + '/login',
        data
      );

      console.log(res);
    } catch (error) {
      
    }
  }

  return (
    <Card style={{ maxWidth: "500px", margin: "auto" }}>
      <CardBody>
        <Form id="login-form">
          <FormGroup>
            <label htmlFor="email">Email</label>
            <FormInput type="email" id="email" placeholder="Email" />
          </FormGroup>
          <FormGroup>
            <label htmlFor="password">Password</label>
            <FormInput type="password" id="password" placeholder="Password" />
          </FormGroup>
          <div style={{ textAlign: "center" }}>
            <Button pill block>Login</Button>
            <Link href="/signup">
              <a>Sign Up</a>
            </Link>
          </div>
        </Form>
      </CardBody>
    </Card>
  );
};

export default Index;
