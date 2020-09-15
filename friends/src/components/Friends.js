import React from "react";
import {
  Card,
  Button,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";

const Friends = (props) => {
  return (
    <div>
      <Card body inverse color="primary">
        <CardHeader>Rachel Green</CardHeader>
        <CardBody>
          <CardText>Age: 30 </CardText>
          <CardText>Email: rachel@friends.com</CardText>
          <Button size="lg" color="success">
            Message
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Friends;
