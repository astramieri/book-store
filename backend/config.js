import mongo from "./.secret/mongo.json" assert { type: 'json' };

export const PORT = 5555;

var username = encodeURIComponent(mongo.DB_user);
var password = encodeURIComponent(mongo.DB_pass);

export const mondogDBURL = `mongodb+srv://${username}:${password}@book-store-mern.jvaqzce.mongodb.net/books-collection?retryWrites=true&w=majority`;