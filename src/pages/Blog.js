import BlogBody from "../components/BlogBody";
import BlogFooter from "../components/BlogFooter";
import BLogHeader from "../components/BlogHeader";
import '../css/blog.css'


function Blog() {

    return (
        <div className="blog-page">
            <BLogHeader></BLogHeader>
            <BlogBody></BlogBody>
            <BlogFooter></BlogFooter>
        </div>
    )
}

export default Blog;

