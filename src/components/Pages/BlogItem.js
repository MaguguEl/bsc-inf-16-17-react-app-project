import React from 'react'
import './Item.css'


const BlogItem = () =>{
    return(
        <div>
            <header>
                <h1>Blogs</h1>
                </header>
                <div className="row">
                    <div className="left_column">
                    <div class="card_blog">
          <h2>Who Let The Dog Out?</h2>
          <h5>Title description, Dec 25, 2020</h5>
          <img  src="/asset/img/2.jpg" alt="blog" />
          <p>Pepani amwene. Munthune ndayesetsa koma pic siikuoneka.</p>
          <p>
          </p>
           </div>
                    </div>
                </div>
        </div>
    );
}

export default BlogItem;