import "./Home.css"
import blogs from "./../../data"
import BlogCard from "./../../components/BlogCard/BlogCard"

function Home() {
   
  return (
  <>
  <div className="blogs-container">
  {
   blogs.map((blogObject,i)=>{
    const {
        id,
        avatar,
        title,
        content,
        author,
        date,
        prize,
        review,
        readmore,
    } = blogObject

    return (
   <BlogCard
   key={i}
   id={id}
   avatar={avatar}
   title={title}
   content={content}
   author={author}
   date={date}
   prize={prize}
   review={review}
   readmore={readmore}
   />)
   }) 
  }
  </div>
  
  </>
  )
}

export default Home
