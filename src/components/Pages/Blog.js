import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import BlogItem from './BlogItem'

const Blog = () =>{
    return(
        <div>
            <Navbar />
            <BlogItem />
            <Footer />
        </div>
    );
}

export default Blog;