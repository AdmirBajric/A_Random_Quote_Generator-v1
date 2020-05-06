/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/***
 * Created quotes array with 5 objects containing 5 differnet properties quote,source,citation,year and tags from well-known developers from the web.
 ***/

const quotes = [
  {
    quote: "Experience is the name everyone gives to their mistakes.",
    source: "Oscar Wilde",
  },
  {
    quote:
      "The secret to building large apps is never build large apps. Break your applications into small pieces. Then, assemble those testable, bite-sized pieces into your big application.",
    source: "Justin Meyer",
  },
  {
    quote:
      "When someone says, 'I want a programming language in which I need only say what I want done,' give him a lollipop.",
    source: "Alan Perlis",
    tags: "javascript",
  },
  {
    quote:
      "Generally, the craft of programming is the factoring of a set of requirements into a a set of functions and data structures.",
    source: "Douglas Crockford",
    citation: "JavaScript: The Good Parts",
  },
  {
    quote: "Obsolete comments are worse than no comments.",
    source: "Douglas Crockford",
    year: 2008,
  },
];

/***
 * Function getRandomQuote generates random number between 0 and the length of quotes array.
 * The getRandomQuote function returns a random object from the quotes array.
 ***/

function getRandomQuote() {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

/***
 * Function printQuote displays a new quote, each time the user clicks the 'Show another quote' button.
 * The printQuote function will prepare the HTML structure (prepareHTML) and display the HTML code (displayHTML) to the div container with the id="quote-box".
 * Calling the function getRandomBackgroundColor, the background color changes.
 ***/

function printQuote() {
  const randomQuote = getRandomQuote();

  let prepareHTML = `<p class="quote"> ${randomQuote.quote} </p><p class="source"> ${randomQuote.source}`;

  if (randomQuote.citation) {
    prepareHTML += `<span class="citation">${randomQuote.citation}</span>`;
  }
  if (randomQuote.year) {
    prepareHTML += `<span class="citation">${randomQuote.year}</span>`;
  }
  if (randomQuote.tags) {
    prepareHTML += `<span class="citation">${randomQuote.tags}</span>`;
  }

  prepareHTML += `</p>`;

  const displayHTML = (document.getElementById(
    "quote-box"
  ).innerHTML = prepareHTML);

  getRandomBackgroundColor();

  return displayHTML;
}

/***
 * Function getRandomBackgroundColor creates random rgb color and changes the background color.
 ***/

function getRandomBackgroundColor() {
  const rgbRandNums = [];

  for (let i = 0; i < 3; i++) {
    const randNum = Math.floor(Math.random() * 256);
    rgbRandNums.push(randNum);
  }

  document.body.style.backgroundColor = `rgb(${rgbRandNums})`;
}

/***
 * Function autoRefreshQuotes calls the function printQuote every 10 seconds with the build in javscript method setInterval.
 * This function ensure automatic calling and refreshment new quote to the client.
 ***/

function autoRefreshQuotes() {
  setInterval(printQuote, 10000);
}

// One time calling autoRefreshQuotes function.
autoRefreshQuotes();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
