const { Book, User } = require('../models');

const resolvers = {
  Query: {
    books: async () => {
      // Populate the user subdocuments when querying for books
      return await Book.find({}).populate('user').populate({
        path: 'user',
        populate: 'user'
      });
    },
    users: async () => {
      // Populate the professor subdocument when querying for classes
      return await Class.find({}).populate('books');
    },
  }
};

module.exports = resolvers;
