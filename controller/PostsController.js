const posts = require('../helper/posts.json')



exports.getAllPosts = (req, res) =>{
    res.json({
        msg : posts
    })
}