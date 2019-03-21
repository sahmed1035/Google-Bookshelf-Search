//2. this is to display api's from database. json format objects
// 6. came back to client from controller. 
//after writing getGoogleBooks go to client in terminal and do npm run build
// open root folder in terminal -> npm install
// 7. bring the User Interface from activity 8. nav bar and stuff in th App.js. make a new page Google.js
// 8. go to App.js in the main folder and add the route for this Google page.

import axios from "axios";

export default {
  // making getGoogleBooks display
  // Gets all google books from external api
  getGoogleBooks: function(query) { //(query) result of the string concatination
    return axios.get("/api/google", {params: { q: "title:" + query} }); // Go to routes api > index.js in the main folder
  },
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books"); // Go to routes api > index.js in the main folder
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
