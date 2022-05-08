import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import axios from "axios";

function App() {

  const [bookurl, setBookurl] = useState(null);
  let getBooks = async () => {
    let booksurl = [];
    let books = await axios("https://myfavaritebook.herokuapp.com/books");


    console.log(books.data[0].image);

    booksurl.push(books.data[0].image)
    booksurl.push(books.data[1].image)
    booksurl.push(books.data[2].image)
    booksurl.push(books.data[3].image)
    setBookurl(booksurl);
    console.log(booksurl)
    console.log(bookurl)
  };

  // make api call
  useEffect(() => {
    getBooks();
  }, []);
  return (
    <div>
      <Navbar />

      <div><img className="img" src=""></img></div>


    </div>


  );
}

export default App;