import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem} from 'react-bootstrap'
import Rating from '../components/Rating';
import axios from 'axios'



const ProductScreen = ({match}) => {
    const [product, setProduct] = useState([])
    useEffect (() => {
        const fetchProduct = async () => {
            const{data} = await axios.get(`/api/products/${match.params.id}`);
            setProduct(data);
        }
        fetchProduct()
    }, []);

    return <>
        <Link className="btn btn-light my-3" to="/">Go Back</Link>
        <Row>
            <Col md={6}>
                <Image src={product.image} alt = {product.name} fluid></Image>
            </Col>
            <Col md={3}>
                <ListGroup variant="flush">
                    <ListGroupItem>
                        <h3>{product.name}</h3>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Rating value={product.rating} text = {`${product.numReviews} reviews`}></Rating>
                    </ListGroupItem>
                    <ListGroupItem>
                        Price : Rs.{product.price}
                    </ListGroupItem>
                    <ListGroupItem>
                        Description  : {product.description}
                    </ListGroupItem>
                </ListGroup>
            </Col>
            <Col md={3}>
                <Card>
                    <ListGroup variant="flush"> 
                        <Row>
                            <Col className="my-1 mx-2" >
                                Price: 
                            </Col>
                            <Col className="my-1 mx-2">
                                <strong>{product.price}</strong>
                            </Col>
                        </Row>
                    </ListGroup>
                    <ListGroup>
                        <Row>
                            <Col className="my-1 mx-2">
                                Status: 
                            </Col>
                            <Col className="my-1 mx-2">
                                {product.countInStock>0 ? 'in Stock': 'out of stock'}
                            </Col>
                        </Row>
                    </ListGroup>
                    <ListGroup>
                        <Button className="btn-block my-3" type = "block" disabled={product.countInStock===0}>ADD TO CART</Button>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    </>
}
export default ProductScreen;
