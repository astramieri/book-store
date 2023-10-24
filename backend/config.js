export const PORT = 5555;

var username = encodeURIComponent("bookstore");
var password = encodeURIComponent(""); // TOFIX

export const mondogDBURL = `mongodb+srv://${username}:${password}@book-store-mern.jvaqzce.mongodb.net/books-collection?retryWrites=true&w=majority`;