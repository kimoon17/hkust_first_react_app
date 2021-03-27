import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function RenderComments({ commentItems }) {
  const comments = commentItems.map((commentItem) => {
    return (
      <ul className="list-unstyled">
        <li>{commentItem.comment}</li>
        <li>
          -- {commentItem.author} ,{" "}
          {new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "short",
            day: "2-digit",
          }).format(new Date(Date.parse(commentItem.date)))}
        </li>
      </ul>
    );
  });
  return (
    <div>
      <h4>Comments</h4>
      {comments}
    </div>
  );
}

function RenderDish({ dish }) {
  return (
    <Card>
      <CardImg width="100%" src={dish.image} alt={dish.name} />
      <CardBody>
        <CardTitle>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
    </Card>
  );
}

const DishDetail = (props) => {
  if (props.dish === null || props.dish === undefined) {
    return <div></div>;
  }
  return (
    <div className="container">
      <div className="row">
        <div key={props.dish.id} className="col-12 col-md-5 m-1">
          <RenderDish dish={props.dish} />
        </div>
        <div className="col-12 col-md-5 m-1">
          <RenderComments commentItems={props.dish.comments} />
        </div>
      </div>
    </div>
  );
};

export default DishDetail;
