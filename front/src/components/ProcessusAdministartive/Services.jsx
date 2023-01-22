import Posting from "../PostingService/Posting.jsx";
import "./services.css";


export default function Services({posts}) {

  return (
    <div className="posts">
     {posts.map((p) => 
       <Posting post={p}/>
     )}

    </div>
  );
}