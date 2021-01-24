import React from 'react'
import { Link } from 'react-router-dom'

const BlogListPage = () => {
    return (
        <div>
            <h1>BlogListPage</h1>
            <Link to="/blogs/1" >Blog 1 </Link>
            <Link to="/blogs/2" >Blog 2 </Link>
            <Link to="/blogs/3" >Blog 3 </Link>
        </div>
    )
}

export default BlogListPage
