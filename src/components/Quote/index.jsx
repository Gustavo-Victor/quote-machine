import Buttons from "../Buttons";
import { FaQuoteLeft } from "react-icons/fa";
import { useState, useLayoutEffect, useEffect } from "react";
import { QuoteBox } from "./styled";

export default function Quote() {
  const [quote, setQuote] = useState({} || null);
  const [loading, setLoading] = useState(true);
  const [socialLinks, setSocialLinks] = useState({
    twitterLink: "#",
    tumblrLink: "#",
  });
  let styles = loading ? { opacity: 0 } : { opacity: 1 };

  const setNewQuote = async () => {
    setLoading(true);
    const response = await fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    );
    const data = await response.json();
    const { quotes } = data;
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setLoading(false);
    const quoteModel = {
      text: randomQuote.quote,
      author: randomQuote.author,
    };
    setQuote({ ...quoteModel });
  };

  const setNewQuoteWithEffect = () => {
    setLoading(true);
    setTimeout(() => {
      setNewQuote();
    }, 500);
  };

  const createLinks = () => {
    let twitterTextArr = quote.text.split(" ");
    let twitterText = `&text="` + twitterTextArr.join("%20");
    let twitterUser = "%22%20" + quote.author.replace(" ", "%20");
    let twitterLink =
      `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp` +
      twitterText +
      twitterUser;

    let tumblrTextArr = quote.text.split(" ");
    let tumblrText = `&content=` + tumblrTextArr.join("+");
    let tumblrUser = `&caption=` + quote.author.replace(" ", "+");
    let tumblrLink =
      `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes%2Cfreecodecamp` +
      tumblrUser +
      tumblrText +
      `&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`;

    const objModel = {
      twitterLink: twitterLink,
      tumblrLink: tumblrLink,
    };

    setSocialLinks(objModel);
  };

  //effects
  useEffect(() => {
    setNewQuote();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      createLinks();
    }, 500);
  }, [quote]);

  return (
    <QuoteBox id="quote-box">
      <>
        <div style={styles} className="quote-text">
          <FaQuoteLeft id="left-quote-icon" />
          <span id="text">{quote.text}</span>
        </div>
        <div style={styles} className="quote-author">
          - <span id="author">{quote.author}</span>
        </div>
      </>
      <Buttons
        twitterLink={socialLinks.twitterLink}
        tumblrLink={socialLinks.tumblrLink}
        changeQuote={setNewQuoteWithEffect}
      />
    </QuoteBox>
  );
}
