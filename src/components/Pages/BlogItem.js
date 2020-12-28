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
          <h2>Who Let The Dogs Out?</h2>
          <h5>Dec 25, 2020</h5>
          <img  src="/asset/img/1.jpg" />
          <p>Pepani amwene. Munthune ndayesetsa koma pic siikuonekabe. Koma apopo panaima galu.</p>
          <p>
          </p>
           </div>
                    </div>
                </div>
        </div>
    );
}

export default BlogItem;