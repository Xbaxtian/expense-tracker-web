import {
  Container,
  Button,
  Form,
  FormGroup,
  FormInput,
  FormTextarea,
} from "shards-react";

import axios from "axios";

const index = () => {
  const handleSubmit = (event) => {};

  return (
    <Container className="mt-5">
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <label htmlFor="#amount">Amount</label>
          <FormInput id="#amount" number />
        </FormGroup>
        <FormGroup>
          <label htmlFor="#description">Description</label>
          <FormTextarea id="#desciption" size="3" />
        </FormGroup>
        <FormGroup className="text-center">
          <Button pill>Save</Button>
        </FormGroup>
      </Form>
    </Container>
  );
};

export default index;
