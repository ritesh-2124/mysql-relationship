//user's post model to create post
module.exports = (db, dataType) => {
    const User = db.define(
      "master_users",
      {
        id: {
          type: dataType.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        name: { type: dataType.STRING },
        email: { type: dataType.STRING },
      },
      {
        timestamps: true,
      }
    );
  
    return User;
  };