let users = [];


exports.register = (req, res) => {
    const userName = req.body.userName;
    const passward = req.body.passward;
    const email = req.body.email;


    users.push({
        userName : userName,
        passward : passward,
        email : email
    });
    res.json({
        msg : "تم تسجيل الدخول بنجاح",
        state : 1,
        data : users
    })

}


exports.login = (req, res) => {
    _user = req.body.userName;
    _pass = req.body.passward;

    if(_user !== "ziyad" || _pass !== "1234"){
        return res.json({
            msg : "الرجاء التأكد من البيانات",
            state : 0
        })
    }

    res.json({
        msg : `مرحبا ${_user}`,
        state : 1,
    })
    
}

exports.getAllUsersSalary = (req, res) => {
    res.json({
        state : 1,
        salary : [1200, 3250, 900, 12000]
    })
}