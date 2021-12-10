const router = require("express").Router();
const userSchema = require("../models/user");

// router.get('/users', (req, resp) => {
//     resp.json( {message: "Get All users"});
// });

router.get('/users',(req,resp) => {
    userSchema.find()
    .then((data) => {
        resp.json(data);
    }).catch((err) => {
        resp.json( { message:err });
    });
});

router.post('/users', (req, resp) => {
    const user = userSchema(req.body);
    user.save()
    .then((data) => {
        resp.json(data);
    }).catch((err) => {
        resp.json( { message:err });
    });
})

router.get('/users/:id', (req,resp)=> {
    const {id} = req.params;
    userSchema.findById(id)
    .then((data) => resp.json(data))
    .catch((err) => resp.json(err));
});

router.put('/users/:id', (req,resp) => {
    const {id} = req.params;
    const {name, age, email} = req.body;
    userSchema.updateOne({_id:id},{ $set:{name,age,email}})
    .then((data => resp.json(data)))
    .catch((err) => resp.json({message: err}));        
});

router.delete('/users/:id', (req,resp) => {
    const {id} = req.params;
    userSchema.remove({_id:id})
    .then((data => resp.json(data)))
    .catch((err) => resp.json({message: err}));   
});

module.exports=router;