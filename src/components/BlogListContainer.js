import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import BlogBigItem from "./BlogBigItem";
import BlogNomalItem from "./BlogNomalItem";
import BlogPagination from "./BlogPagination";

function BlogListContainer() {

    const [items, setItems] = useState([])

    function getItemRender(items) {
        setItems(items);
    }
    

    return (
        <Container className="blog-list-container">
            <Row style={{ marginBottom: '130px' }}>
                <Col className="pd-0">
                    <BlogBigItem></BlogBigItem>
                </Col>
            </Row>
            <Container>
                <Row xl={3} md={2} sm={1} xs={1}>
                    {
                        items.map(item => {
                           return <BlogNomalItem key ={item.id} item = {item}></BlogNomalItem>
                        })
                    }
                </Row>
            </Container>
            <BlogPagination getItemRender={getItemRender}></BlogPagination>
        </Container>
    )
}

export default BlogListContainer;