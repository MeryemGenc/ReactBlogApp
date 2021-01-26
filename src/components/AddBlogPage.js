import React from 'react'
import BlogForm from './BlogForm'
import { connect } from 'react-redux'
import { addBlog } from '../actions/blogs'

const AddBlogPage = (props) => {
    return (
        <div>
            <h1>Add blog</h1>
            <BlogForm onSubmit={(blog) => {
                props.dispatch(addBlog(blog));
                //blog eklemeden sonra yönlendirme
                props.history.push('/blogs');
            }} />
        </div>
    )
}

export default connect()(AddBlogPage)
