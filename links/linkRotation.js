// Rotates different books or social links weekly
let rotation = {
  books: [],
  index: 0
};

module.exports = {
  setBooks: function(bookArray) {
    rotation.books = bookArray;
  },
  getNextBook: function() {
    const next = rotation.books[rotation.index % rotation.books.length];
    rotation.index++;
    return next;
  }
};