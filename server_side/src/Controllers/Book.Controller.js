const express = require('express');
const Router = express.Router();
const { Book, User, Junction} = require("../config/db");




Router.get('/book', (req, res) => {
    Book.findAll({
         include:[{
                model:User,
                attributes:['name' , 'email']
         }],
         exclude:[{
            model : User,
            attributes:['createdAt' , 'updatedAt']
         }]
    }).then(users => {
        res.send(users);
    }
    ).catch(err => {
        res.send(err);
    }
    );
}
);

Router.get('/book/:id', (req, res) => {
 Book.findAll({
        where:{
            id:req.params.id
        },
        include:[{
                model:User,
                attributes:['name' , 'email']
        }]
    }).then(users => {
        res.send(users);
    }
    ).catch(err => {
        res.send(err);
    }
    );
}
);


Router.post('/book', (req, res) => {
   Book.create(req.body).then(book => {
        res.send(book);
    }
    ).catch(err => {
        res.send(err);
    }
    )
}
);



module.exports = Router


