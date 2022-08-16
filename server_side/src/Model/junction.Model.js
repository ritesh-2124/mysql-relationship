//user's post model to create post
module.exports = (db, dataType) => {
    const Junction = db.define(
      "junction",
      {
        id: {
          type: dataType.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        }

      },
      {
        timestamps: false,
      }
    );
  
    return Junction;
  };