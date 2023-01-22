import "./posting.css";
import { Link } from "react-router-dom";

export default function Posting({post}) {
  const PublicFolder= "http://localhost:9099/document/"
  return (
    <div className="post">
      {
      post.photo ? <img
          className="postImg"
          src={PublicFolder + post.photo}
          alt=""
        />
        :
        <img
          className="singlePostImg"
          src="https://www.puratos.fr/content/dam/france/visuel-indisponible.jpg/jcr:content/renditions/cq5dam.web.800.800.jpeg"
          alt=""
        />
      }

      <div className="postInfo">
       
        <Link to={`/post/${post.postId}`} className="link">
        <span className="postTitle">{post.title}</span>
        </Link>
        
        <hr />
        <span className="postDate">{new Date(post.createdAt).toDateString}</span>
      </div>
      <p className="postDesc">
        {post.desc}
      </p>
    </div>
  );
}