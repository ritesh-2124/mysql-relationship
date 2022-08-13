const express = require('express');

const Router = express.Router();
const {User  , Book} = require("../config/db");
 


Router.get('/', (req, res) => {
    User.findAll({
        include:[{
            model:Book,
            attributes:['title' , 'id']
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



Router.get('/:id', (req, res) => {
   User.findAll({
            where:{
                id:req.params.id
            },
            include:[{
                    model:Book,
                    attributes:['title' , 'id']
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

Router.post('/', (req, res) => {
    User.create(req.body).then(user => {
        res.send(user);
    }).catch(err => {
        res.send(err);
    })

}   //end of post
);

module.exports = Router;