import { FaTwitter, FaTumblr } from "react-icons/fa";
import { ButtonsDiv } from "./styled";
import { useTheme } from "../../hooks/useTheme";

export default function Buttons({ twitterLink, tumblrLink, changeQuote }) {
  const { theme, setNewTheme } = useTheme();

  const handleClick = () => {
    setNewTheme();
    changeQuote();
  };

  return (
    <ButtonsDiv id="buttons">
      <div className="social-links">
        <a
          id="tweet-quote"
          target="_blank"
          className="button"
          href={twitterLink}
        >
          <FaTwitter />
        </a>
        <a
          id="tumblr-quote"
          target="_blank"
          className="button"
          href={tumblrLink}
        >
          <FaTumblr />
        </a>
      </div>
      <button id="new-quote" onClick={handleClick} className="button">
        New Quote
      </button>
    </ButtonsDiv>
  );
}
