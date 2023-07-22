function capitalizedAuthorName(book) {
    return {
        title: book.title,
        author: book.author.toUpperCase(),
        publicationYear: book.publicationYear
    };
}

function filterBookByPublicationYear(books) {
    const filteredBooks = books.filter(book => book.publicationYear >= 2010);
    return filteredBooks.map(capitalizedAuthorName);
}

const books = [
    { title: "Book 1", author: "author 1", publicationYear: 2005 },
    { title: "Book 2", author: "author 2", publicationYear: 2015 },
    { title: "Book 3", author: "author 3", publicationYear: 2009 },
    { title: "Book 4", author: "author 4", publicationYear: 2012 },
    { title: "Book 5", author: "author 5", publicationYear: 2008 },
];

const filteredBooks = filterBookByPublicationYear(books);
console.log(filteredBooks);

