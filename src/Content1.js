import React from "react";

function Content1({ loggedIn, fontSize }) {
   
  return loggedIn && <p style={{fontSize: fontSize}}>CONTENT</p>;
}

export default Content1;
