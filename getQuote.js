function getQuote(allQuotes){
    // debugger;
    let strAllQuotes = new String (allQuotes.toString());
    let lines = strAllQuotes.split('\n');
    let whichQuote = Math.floor(Math.random() * lines.length);

    const quotes = lines.map(line => {
        quoteAuthor = line.toString().split(',');
        return {
            quote: quoteAuthor[0],
            author: quoteAuthor[1]
        }
    })


    return quotes[whichQuote];
}