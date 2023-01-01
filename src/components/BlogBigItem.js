import { Container, Col, Row } from "react-bootstrap";


function BlogBigItem() {

    return (
        <Container className="blog-big-item" >
            <Row>
                <Col className="wrap-img-big-item p-20">
                    <img
                        className="blog-big-item-img pd-img"
                        src="https://d357wx87z4hzhv.cloudfront.net/wp-content/uploads/2022/12/29161332/Maximize-Tax-Deductions-by-Investing-in-Marketing-458x254.webp"
                        alt="blog-big-item"
                    />
                </Col>
                <Col className="p-20">
                    <div className="blog-big-item-desc">
                        <div className="item-link-blue">
                            <span className="hover-change-color">BLOG</span>
                            , 
                            <span className="hover-change-color">GENERAL MARKETING TIPS & STRATEGIES</span>
                            , 
                            <span className="hover-change-color">SMALL BUSINESS RESOURCES & TIPS</span> 
                        </div>
                        <div className="item-link-black fs-2">
                            Maximize Tax Deductions by Investing in Marketing
                        </div>
                        <div className="item-text">
                            The end of the year is fast approaching, 
                            and with it comes the dreaded tax season. 
                            While taxes can be a source of stress and anxiety for many, 
                            there is one surefire way to reduce your tax burden while 
                            also helping to grow your business: 
                            spending money on marketing. 
                            Marketing is an essential part of…
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default BlogBigItem;