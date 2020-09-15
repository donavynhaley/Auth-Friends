import React, { useState, useEffect } from "react";
import {
  Card,
  Button,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Friends = (props) => {
  const [freindsList, setFriendsList] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get("/api/friends")
      .then((res) => {
        setFriendsList(res.data);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);
  if (freindsList.length == 0) {
    return <h4>You have no Friends</h4>;
  }
  return (
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
  );
};

export default Friends;
