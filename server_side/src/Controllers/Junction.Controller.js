const express = require("express")
const Router = express.Router()
const { User, Book, Junction } = require("../config/db")



Router.get("/junction", (req, res) => {
    Junction.findAll({
        include: [{
            model: User,
            attributes: ["name"]
        }, {
            model: Book,
            attributes: ["title"]
        }]

    }).then(junction => {
        res.send(junction);
    }
    ).catch(err => {
        res.send(err);
    }
    );
}
);

Router.post("/junction", (req, res) => {
    Junction.create(req.body).then(junction => {
        res.send(junction);
    }).catch(err => {
        res.send(err);
    }
    )
})

module.exports = Router