const randomQuote = document.querySelector("#text");
const randomAuthor = document.querySelector("#author");
const quoteButton = document.querySelector("#new-quote");
const tweetButton = document.querySelector("#tweet-quote");

const init = () => {
  quoteButton.addEventListener("click", getQuote);
  tweetButton.addEventListener("click", tweetText);
  getQuote();
};


const getQuote = () => {
  fetch("https://api.quotable.io/random")
  .then((response) => response.json())
  .then(
    (data) =>
    // console.log(data)
    writeText(data)
    );
  };
  
  const writeText = (data) => {
    randomQuote.innerText = data.content;
    randomAuthor.innerText = data.author;
  };
  
  const tweetText = () => {
    tweetButton.setAttribute(
      "href",
      `https://www.twitter.com/intent/tweet?text="${randomQuote.textContent}" -${randomAuthor.textContent}`
    );
  };
  
window.addEventListener("load", init);
