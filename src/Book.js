import React from "react";

const Book = books => {
    return (
        <div>
            <h1>{ books.title }</h1>
            <h2>{ books.author }</h2>
            <h2>{ books.publication_date }</h2>
        </div>
    );
};

export default Book;