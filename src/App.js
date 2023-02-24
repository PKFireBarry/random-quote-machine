import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    setQuote(data.content);
    setAuthor(data.author);
  };

  const handleClick = () => {
    fetchQuote();
  };

  const tweetQuote = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${quote} - ${author}`)}`;
    window.open(twitterUrl, '_blank');
  };

  return (
    <div className="container text-center">
      <div id="quote-box">
        <div className="quote-text">
          <i className="fas fa-quote-left"></i>
          <span id="text">{quote}</span>
        </div>
        <div className="quote-author">
          <span id="author">- {author}</span>
        </div>
        <div className="buttons">
          <button id="new-quote" onClick={handleClick}>New Quote</button>
          <a id="tweet-quote" href="twitter.com/intent/tweet" onClick={tweetQuote}>Tweet Quote</a>
        </div>
      </div>
    </div>
  );
}

export default App;


