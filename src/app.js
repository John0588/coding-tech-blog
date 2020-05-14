import React from "react";
import ReactDOM from "react-dom";
import Book from "./Book";

const App = () => {
    return (
        <div>
            <h1>tech blog</h1>
            <Book tittle="Lord of the Rings" author="J.R.R. Tolkien" publication_date="1954" />
            <Book tittle="The Hobbit" author="J.R.R. Tolkien" publication_date="1937" />
            <Book tittle="Neuromancer" author="William Gibson" publication_date="1984" />
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById("root"));