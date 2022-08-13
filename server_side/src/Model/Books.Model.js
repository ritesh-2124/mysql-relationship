//user's post model to create post
module.exports = (db, dataType) => {
    const Book = db.define(
      "book",
      {
        id: {
          type: dataType.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        title: { type: dataType.STRING }
      },
      {
        timestamps: true,
      }
    );
  
    return Book;
  };