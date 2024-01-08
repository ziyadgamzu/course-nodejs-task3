const StudentModel = require('../model/StudentModel');


// create student
exports.create = async (req, res) =>{
     await StudentModel.create({
        stdNo : req.body.stdNo,
        stdName : req.body.stdName,
        stdDegree : req.body.stdDegree
    }).then(()=>{
        res.json({
            msg : "Student Created",
            status : 1,
             
        })
    }).catch((err)=>{
        console.log(err)
        res.json({
            msg : `entenal server error : ${err}`,
            status : 0,
        })
    })
}

 // get all stored students
 exports.find = async (req, res) =>{
    await StudentModel.find().then((data)=>{
       res.json({
           msg : "data imported successfully",
           status : 1,
           data : data
       })
   }).catch((err)=>{
       console.log(err)
       res.json({
           msg : `entenal server error : ${err}`,
           status : 0,
       })
   })
}

//get student by number
exports.findOne = async (req, res) =>{
    await StudentModel.findOne({stdNo : req.params.stdNo}).then((data)=>{
        if(data === null){
            return res.json({
                msg : "user not found",
                status : 0
            })
        }
       res.json({
           msg : "user found successfully",
           status : 1,
           data : data
       })
   }).catch((err)=>{
       console.log(err)
       res.json({
           msg : `entenal server error : ${err}`,
           status : 0,
       })
   })
}



