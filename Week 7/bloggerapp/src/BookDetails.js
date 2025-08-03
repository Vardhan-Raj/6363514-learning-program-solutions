import React from "react";
import { books } from "./data";

const BookDetails = () => {
  // This component mirrors the hint provided in the document
  const bookdet = (
    <ul>
      {books.map((book) => (
        <div key={book.id}>
          <h3>{book.bname}</h3>
          <h4>{book.price}</h4>
        </div>
      ))}
    </ul>
  );

  return <div>{bookdet}</div>;
};

export default BookDetails;
