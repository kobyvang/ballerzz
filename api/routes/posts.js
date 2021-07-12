const router = require("express").Router();
const Post = require("../models/Posts")

//create a post
router.post("/", async (req,res) =>{
    const newPost = new Post(req.body)
    try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch(err){
        res.status(500).json(err)
    }
})

//update a post
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
            await post.updateOne({$set:req.body});
            res.status(200).json("the post was updated")
        }else{
            res,status(403).json("you can updated only your post!")
        }
    }catch(err){
    res.status(500).json("something is wrong");
        }
});

//delete a post
router.delete("/:id", async (req, res) => {
    try{
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.deleteOne();
            res.status(200).json("post has been deleted")
        }else {
            res.status(403).json("you can only delete your own post!");
        }
    }catch (err) {
        res.status(500).json("please something went wrong again");
    }
});
//like a post
router.put("/id/like", async (req, res) => {
    try{
        const post = await Post.findById(req.params.Id);
        if(!post.likes.includes(req.body.userId)) {
            await post.updateOne({ $push: { likes: req.body.userId} } );
            res.status(200).json('this post is liked')
        }else {
            await post.updateOne({ $pull: {likes: req.body.userId } } );
            res.status(200).json("the post has been disliked");
        }
    }catch (err) {
        res.stale(500).json("not again....");
    }
});
//get a post
//get timeline posts



module.exports = router;