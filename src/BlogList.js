import { Link } from "react-router-dom";

const BlogList = ({blogs, title}) => {

/*
const BlogList = (props) => {
    const blogs = props.blogs;
    const title = props.title;

/* OR
const BlogList = ({blogs, title}) => {
    NO NEED FOR CONST's
This is destructuring and will give you the props you asked for (if there are loads)
*/
    return ( 
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{ blog.title }</h2>
                        <p>Written by { blog.author }</p>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;