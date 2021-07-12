import "./post.css";
import {Users} from "../../dummyData";
import { useState } from "react";


export default function Post({post}) {
const [like,setLike] = useState(post.like)
const [isLiked,setIsLiked] = useState(post.like)
const [going,setGoing] = useState(post.going)
const [isGoing,setIsGoing] = useState(post.going)

const likeHandler =()=>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
}
const goingHandler = () => {
    setGoing(isGoing ? going-1 : going+1)
    setIsGoing(!isGoing)
}

    return (
        <div className="post">
           <div className="postWrapper">
               <div className="postTop">
                   <div className="postTopLeft">
                   <img src={Users.filter((u) => u.id === post.userId)[0].profilePicture} alt="" className="postProfileImg"/>
                   <span className="postUsername">{Users.filter((u) => u.id === post.userId)[0].username}
                   </span>
                   <span className="postDate">{post.date}</span>
                   </div>
                   <div className="postTopRight"></div>
                   <div className="postCenter">
                       <span className="postText">{post.desc}</span>
                       <img src={post.photo} alt="" className="postImg"/>
                       <div className="postBottom">
                            
                            <img src="/assets/like.png" onClick={likeHandler} alt=""  className="postBottomLike"/>
                            <img src="/assets/plus.png" onClick={goingHandler} alt="" className="postBottomThumb"/>
                            <span className="postlikeCounter">{like}people like it</span>
                            <span className="postgoingCounter">{going}people are going</span>
                            <div className="postBottomRight">
                                <div className="postCommentText">{post.comments}comments</div>
                            </div>
                       </div>
                   </div>
               </div>
           </div>
        </div>
    )
}


