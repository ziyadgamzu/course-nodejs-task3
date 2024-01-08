



exports.Check_registerNullValues = (req, res, next) => {
    const _user = req.body.userName;
    const _pass = req.body.passward;
    const _email = req.body.email;
    if(!_user || !_pass || !_email){
        return res.json({
            msg : "يرجى ادخال البيانات",
            state : 0
        })
    } 

    next();
}

exports.Check_loginNullValues = (req, res, next) => {
    const _user = req.body.userName;
    const _pass = req.body.passward;
    if(!_user || !_pass){
        return res.json({
            msg : "يرجى ادخال البيانات",
            state : 0
        })
    } 

    next();
}