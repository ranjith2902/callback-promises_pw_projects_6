const books = [
{
    title: "THINK LIKE A MONK",
    author: "JAY SHETTY",
    year: 2020,
},

{
    title: "IT ENDS WITH US",
    author: "COOLLEN HOOVER",
    year: 2022,
},

{
    title: "IT STARTS WITH US",
    author: "COOLLEN HOOVER",
    year: 2016,
},

{
    title: "AGNI SIRAGUGAL",
    author: "A.P.J ABDUL KALAM",
    year: 1999,
},

];

function logTitles(titles) {
    titles.sort();
    console.log(titles.join(", "));
    
}

function extraTitles(books, callback) {
    const titles = books.map((book) => book.title);
    callback(titles);   
}

extraTitles(books, logTitles);