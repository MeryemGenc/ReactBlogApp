import React from 'react';
import { connect } from 'react-redux';
import BlogListItem from './BlogListItem';




const BlogList = (props) => {
    console.log(props);
    return (
        <ul>
            {
                props.blogs.map(blog => {
                    return <BlogListItem key={blog.id} {...blog} />
                })
            }
        </ul>
    )
}

const mapStatetoProps = (state) => {
    return {
        blogs: state.blogs
    }
}


// kullanılan pattern = higher order component(HOC)
export default connect(mapStatetoProps)(BlogList)
