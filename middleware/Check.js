



exports.checkSalary = (req, res, next) => {
    _user = req.body.username;
    if(_user === "ziyad"){
        next();
        return
    }

    res.json({
        msg : "المستخدم غير مصرح له بالدخول",
        state : 0
    })
}