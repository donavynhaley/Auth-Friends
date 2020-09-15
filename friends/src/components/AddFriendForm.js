import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Alert,
} from "reactstrap";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const AddFriendForm = (props) => {
  const { freindsList, setFriendsList } = props;
  // Setting state
  const [newFriend, setNewFriend] = useState({
    id: 1,
    name: "Joe",
    age: 24,
    email: "joe@lambdaschool.com",
  });
  const [errors, setErrors] = useState("");
  const [postSuccess, setPostSuccess] = useState(false);

  // updating state on form change
  const handleChange = (e) => {
    setNewFriend({
      ...newFriend,
      [e.target.name]: e.target.value,
    });
  };

  // on submit runs and makes post request
  const login = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/friends", newFriend)
      .then((res) => {
        // Set token in local storage
        localStorage.setItem("token", res.data.payload);
        setErrors("");
        setPostSuccess(true);
        setFriendsList(res.data);
      })
      .catch((err) => {
        setErrors(err.response.data.error);
      });
  };

  // Modal Logic
  const toggle = () => setModal(!modal);

  const [modal, setModal] = useState(false);

  return (
    <div className="form-wrapper">
      <Button
        color="danger"
        onClick={(toggle, setPostSuccess(false))}
        size="lg"
      >
        Add Friend
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        {postSuccess == true ? (
          <Alert color="success">This is a success alert — check it out!</Alert>
        ) : null}
        <ModalHeader toggle={toggle}>Add a Friend</ModalHeader>
        <ModalBody>
          <Form onSubmit={login}>
            <FormGroup>
              <Label for="name" hidden>
                name
              </Label>
              <Input
                type="name"
                name="name"
                id="name"
                placeholder="Name"
                onChange={(e) => handleChange(e)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="age" hidden>
                age
              </Label>
              <Input
                type="age"
                name="age"
                id="age"
                placeholder="Age"
                onChange={(e) => handleChange(e)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="email" hidden>
                email
              </Label>
              <Input
                type="age"
                name="email"
                id="email"
                placeholder="Email"
                onChange={(e) => handleChange(e)}
              />
            </FormGroup>
            <ModalFooter>
              <Button color="primary">Add</Button>
              <Button color="secondary" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default AddFriendForm;
