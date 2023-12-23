



exports.addProduct = (req, res) =>{
    res.json({
        msg : "add product",
        state : 1,
        data : ["iphone", "samsung", "xiaomi"]
    })
}