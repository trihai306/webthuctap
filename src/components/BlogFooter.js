import { Button } from "react-bootstrap";


function BlogFooter() {

    return (
        <div className="blog-footer">
            <div className="blog-footer-title">
                Get the know-how to get ahead
            </div>
            <div className="blog-footer-desc">
                Get business, marketing and sales tips written by
                experienced industry practitioners. 100% free. Cancel anytime.
            </div>
            <div className="blog-footer-send-mail">
                <input placeholder="Email" className="blog-footer-input-email input-blog"></input>
                <Button variant="primary" style={{padding: '0 30px'}}>Subcribe</Button>
            </div>
        </div>
    )
}

export default BlogFooter;