import { render } from "@testing-library/react"
import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import dateFormat from 'dateformat';

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }

    renderComments(commentItems) {
        const comments = commentItems.map((commentItem) => {
            return (
                <ul className="list-unstyled">
                    <li>{commentItem.comment}</li>
                    <li>-- {commentItem.author} , {dateFormat(commentItem.date, "mmmm dS, yyyy")}</li>
                </ul>
            )
        });
        return (
            <div>
                <h4>Comments</h4>
                {comments}
            </div>
        );
    }

    renderDish(dish) {
        return (
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        )
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div key={this.props.dish.id} className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.dish.comments)}
                    </div>
                </div>
            </div>
        )
    }
}

export default DishDetail;