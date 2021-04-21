const user = require('../models/user');
const bcrypt = require('bcrypt');
const no_user = "No user submitted";

module.exports.get_all = (req, res)=>{
    user.find({},(err, users)=>{
        err?res.json(err):res.json(users);
    });
}

// module.exports.get_signup = (req, res)=>{
//     if(req.query){

//         const user1 = req.query;
//         user.create(user1,
//         (err, user)=>err?res.json(err):res.json(user));
//     }else{
//         res.json("No Query Submitted");
//     }
// }

// module.exports.get_login = (req, res)=>{
//     if(req.query){
        
//         const user1 = req.query;
//         user.find(user1, (err, user)=> err? res.json(err) : res.json(user));
//     }else{
        
//         res.json("No Query Submitted");
//     }
// }

module.exports.post_signup = async (req, res)=> {
    if(req.body){
        const {username, password} = req.body;
        const newUser = new user({username, password});
        bcrypt.genSalt(10, (err, salt)=>{
            bcrypt.hash(req.body.password, salt, (err, hash)=>{
                if(err) throw err;
                newUser.password = hash;
                newUser.save().then(user =>{
                    res.json({
                        user:{
                            id: user._id,
                            username: user.username
                        }
                    });
                });
            });
        });
    }else{
        res.status(400).json(no_user);
    }
}

module.exports.post_login = async (req, res)=> {
    if(req.body){
        const u = req.body.username;
        user.findOne({username: u}, (err, user)=>{
            err?res.status(400).json(err):(
                bcrypt.compare(req.body.password, user.password)
                .then((result)=>{
                    if(result){
                        res.status(200).json(user);
                    }else{
                        res.status(404).json("Wrong Password");
                    }
                })
            )
        });
    }else{
        res.status(400).json(no_user);
    }
}

module.exports.user_bmodels = async(req, res)=>{
    if(req.body){
        let newModels = {"title": req.body.title, "authorID": req.params.userid, "body": req.body.body};
        user.findById(req.params.userid, (err, user)=>{
            if(err){
                res.status(400).json(user_error);
            }
            user.bmodels.push(newModels);
            user.save();
            res.status(200).json(user);
        })
    }else{
        res.status(400).json(user_error);
    }
}

module.exports.get_bmodels_byid = (req, res)=>{
    if(req.params.userid){
        user.findById(req.params.userid, (err, user1)=> err?res.status(400).json(err):res.status(200).json(user1.bmodels));
    }else{
        res.status(400).json(user_error);
    }
}