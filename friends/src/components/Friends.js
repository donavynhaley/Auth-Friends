import React, { useState, useEffect } from "react";
import {
  Card,
  Button,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  Spinner,
} from "reactstrap";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import AddFriendForm from "./AddFriendForm";
const Friends = (props) => {
  //set state
  const [freindsList, setFriendsList] = useState([]);
  // fetching data
  useEffect(() => {
    axiosWithAuth()
      .get("/api/friends")
      .then((res) => {
        setFriendsList(res.data);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, [setFriendsList]);

  // loading
  if (freindsList.length == 0) {
    return <Spinner type="grow" color="primary" />;
  }
  return (
    <div className="friends-container">
      <AddFriendForm
        freindsList={freindsList}
        setFriendsList={setFriendsList}
      />
      <div className="friends">
        {freindsList.map((friend) => {
          return (
            <Card body inverse color="primary" key={friend.id}>
              <CardHeader>{friend.name}</CardHeader>
              <CardBody>
                <CardText>Age: {friend.age} </CardText>
                <CardText>Email: {friend.email}</CardText>
                <Button size="lg" color="success">
                  Message
                </Button>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Friends;
