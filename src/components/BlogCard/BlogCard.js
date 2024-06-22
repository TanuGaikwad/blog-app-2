import "./BlogCard.css"
import { Link } from 'react-router-dom';

function BlogCard({id, avatar,title, content, author, date,prize,review,readmore}) {
  return (
    <Link className="blog-card" to={`/blog/${id}`}>
      <img src={avatar} alt="avatar" className="product-img"/>
        <h2 className="blog-title">{title}</h2>
      <p className="blog-content-preview">
        {content.substring(0, 69)}.....
      </p>
      <div className="author-card">
        <img src={author.avatar} alt="author" className="author-avatar"/>
        <span className="author-name">{author.name}</span>
        <span className="blog-date">{date}</span> 
      </div> 
      <div>
      <span><h3>{prize}</h3></span>
      <span><h6>{review}</h6></span>
      </div>

      
      <button className="front-btn">READ MORE</button>

    </Link>
  )
}

export default BlogCard

