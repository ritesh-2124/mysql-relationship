const {Sequelize, DataTypes} = require('sequelize');
const User = require('../Model/User.Model');    
const Book = require('../Model/Books.Model');
const Junction = require('../Model/junction.Model');
const db = {}

const Seq = new Sequelize('relation_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging:false
}
);
db.sequelize = Seq;

db.Book  =  Book(Seq, DataTypes);
db.User = User(Seq, DataTypes);
db.Junction = Junction(Seq, DataTypes);


// db.User.hasOne(db.Book, {foreignKey: 'user_id'});
// db.Book.belongsTo(db.User, {foreignKey: 'user_id'});


// db.User.hasMany(db.Book, {foreignKey: 'user_id'});
// db.Book.belongsTo(db.User, {foreignKey: 'user_id'});

db.User.belongsToMany(db.Book, {through: db.Junction , foreignKey: 'user_id'});
db.Book.belongsToMany(db.User, {through: db.Junction , foreignKey: 'book_id'});


db.sequelize.sync().then(() => {
    console.log(`synchronized to data base`);
  });
  // exporting connection model
  module.exports = db;