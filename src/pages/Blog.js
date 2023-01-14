import { useEffect, useState } from "react";
import BlogBody from "../components/BlogBody";
import BlogFooter from "../components/BlogFooter";
import BLogHeader from "../components/BlogHeader";
import '../css/blog.css'


function Blog() {
    const [scrollY, setScrollY] = useState(() => {
        return window.scrollY
    });
    const [scrollTop, setScrollTop] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            
            setScrollTop(window.scrollY > 0 && scrollY > window.scrollY)
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrollY])

    const handleScrollToTop = () => {
        window.scroll(0,0)
    }

    console.log('re-render')

    return (
        <div className="blog-page">
            <BLogHeader></BLogHeader>
            <BlogBody></BlogBody>
            <BlogFooter></BlogFooter>
            {scrollTop && (
                <button
                    className="position-fixed bottom-0 end-0"
                    onClick={handleScrollToTop}
                >
                    Go to top
                </button>
            )}
        </div>
    )
}

export default Blog;

