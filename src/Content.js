function Content({ loggedIn, text }) {
    return loggedIn && <p>{text}</p>;
  }

  export default Content;